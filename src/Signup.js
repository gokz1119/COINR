import { React, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { db } from './firebase'
import eth_illustration from './Icons/ethereum-illustration.svg'
import Input from './Input'
import next_icon from './Icons/arrow-drop-down.svg'

export default function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bankName, setBankName] = useState('')
    const [branch, setBranch] = useState('')
    const [accNo, setAccNo] = useState('')
    const [ifsc, setIfsc] = useState('')

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [bankErr, setBankErr] = useState(false);
    const [branchErr, setBranchErr] = useState(false);
    const [accErr, setAccErr] = useState(false);
    const [ifscErr, setIfscErr] = useState(false);

    const [isFirstPart, setIsFirstPart] = useState(true)

    const navigate = useNavigate();

    const validEmail = () => {
        var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(mailFormat)) {
            return true;
        }
        else {
            return false;
        }
    }

    const validateFirstPart = () => {
        if (name === '') {
            setNameErr(true);
            setIsFirstPart(true);
            return false;
        }
        setNameErr(false);
        if (email === '') {
            setEmailErr(true);
            setIsFirstPart(true);
            return false;
        }
        if (!validEmail()) {
            setEmailErr(true);
            setIsFirstPart(true);
            return false;
        }
        setEmailErr(false);

        return true;
    }

    const addUser = async (e) => {
        e.preventDefault();
        var accFormat = /^\d{9,18}$/

        if (validateFirstPart()) {
            if (bankName === '') {
                setBankErr(true);
            }
            else if (branch === '') {
                setBankErr(false);
                setBranchErr(true);
            }
            else if (accNo === '' || !accNo.match(accFormat)) {
                setBankErr(false);
                setBranchErr(false);
                setAccErr(true);
            }
            else if (ifsc === '') {
                setBankErr(false);
                setBranchErr(false);
                setAccErr(false);
                setIfscErr(true);
            }
            else {
                setBankErr(false);
                setBranchErr(false);
                setAccErr(false);
                setIfscErr(false);
                await addDoc(collection(db, "Users"), {
                    name: name,
                    email: email,
                    bankName: bankName,
                    bankBranch: branch,
                    accNo: accNo,
                    ifsc: ifsc
                });
                alert("Added user successfully! Revisit the login page to continue");
                setName('');
                setEmail('');
                setBankName('');
                setBranch('');
                setAccNo('');
                setIfsc('');
                navigate('/');
            }
        }
    }

    return (
        <>
            {isFirstPart &&
                <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                        md:flex-row md:justify-evenly'>
                    <img src={eth_illustration} alt="Ethereum Illustration" className='w-64 md:w-1/4' />
                    <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary p-8 rounded-xl max-w-xs my-8 md:my-0 md:max-w-sm'>
                        <div className='flex justify-center pb-4'>
                            <span className='text-white text-3xl'>Welcome to</span>
                            <span className="text-blue-primary text-3xl pl-2">CO</span>
                            <span className="text-red text-3xl">INR</span>
                        </div>
                        <div className='h-1 w-full flex justify-center items-center ml-1'>
                            <div className='h-1 w-1/2 bg-red'></div>
                            <div className='h-1 w-1/2 bg-blue-background'></div>
                        </div>
                        <div>
                            <form>
                                <Input type={"text"} placeholder={"Name"} isDisabled={false} value={name} setValue={setName} inpErr={nameErr} setInpErr={setNameErr} />
                                {nameErr &&
                                    <span className='text-red pl-2'>Please enter your name!</span>
                                }
                                <Input type={"email"} placeholder={"Email"} isDisabled={false} value={email} setValue={setEmail} inpErr={emailErr} setInpErr={setEmailErr} />
                                {emailErr &&
                                    <span className='text-red pl-2'>Please enter a valid email id!</span>}
                                <div className='flex flex-row-reverse'>
                                    <button className='bg-red w-24 text-center py-2 m-1 rounded-xl text-white text-xl
                        hover:bg-red-variant transition-all ease-in-out flex justify-around items-center' type='submit' onClick={() => setIsFirstPart(false)}>
                                        <span className='pl-3'>Next</span>
                                        <img src={next_icon} alt='Dropdown' className='w-5 h-5 mr-1.5 -rotate-90' />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='text-white flex justify-center pt-3'>
                            <span>Already have an account?
                                <Link to={"/"} >
                                    <span className='no-underline text-blue-primary px-1'>Login</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            }
            {!isFirstPart &&
                <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                md:flex-row md:justify-evenly'>
                    <img src={eth_illustration} alt="Ethereum Illustration" className='hidden md:flex md:w-1/4' />
                    <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary p-8 rounded-xl max-w-xs my-8 md:my-0 md:max-w-sm'>
                        <div className='flex justify-center pb-4'>
                            <span className='text-white text-3xl'>Bank Account Details</span>
                        </div>
                        <div className='h-1 w-full flex justify-center items-center ml-1'>
                            <div className='h-1 w-1/2 bg-red'></div>
                            <div className='h-1 w-1/2 bg-red'></div>
                        </div>
                        <div>
                            <form action='/swap' onSubmit={addUser}>
                                <Input type={"text"} placeholder={"Bank Name"} isDisabled={false} value={bankName} setValue={setBankName} inpErr={bankErr} setInpErr={setBankErr} />
                                {bankErr &&
                                    <span className='text-red pl-2'>Please enter a bank name!</span>}
                                <Input type={"text"} placeholder={"Branch Name"} isDisabled={false} value={branch} setValue={setBranch} inpErr={branchErr} setInpErr={setBranchErr} />
                                {branchErr &&
                                    <span className='text-red pl-2'>Please enter a branch name!</span>}
                                <Input type={"text"} placeholder={"Bank Account Number"} isDisabled={false} value={accNo} setValue={setAccNo} inpErr={accErr} setInpErr={setAccErr} />
                                {accErr &&
                                    <span className='text-red pl-2'>Please enter a valid account number!</span>}
                                <Input type={"text"} placeholder={"IFSC Code"} isDisabled={false} value={ifsc} setValue={setIfsc} inpErr={ifscErr} setInpErr={setIfscErr} />
                                {ifscErr &&
                                    <span className='text-red pl-2'>Please enter a valid IFSC Code!</span>}
                                <div className='flex justify-between items-center'>
                                    <div className='mt-3 w-20 border border-blue-primary 
                                    hover:border-blue-primary-variant rounded-lg text-center py-2 pr-1
                                    mx-1 flex justify-around items-center cursor-pointer' onClick={() => setIsFirstPart(true)}>
                                        <img src={next_icon} alt='Dropdown' className='w-5 h-5 ml-1.5 rotate-90' />
                                        <span className='pr-1 text-lg text-blue-primary'>Back</span>
                                    </div>
                                    <button className='bg-red w-24 text-center py-2.5 mt-2 mx-1 rounded-xl text-white text-xl
                hover:bg-red-variant transition-all ease-in-out flex justify-around items-center'>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='text-white flex justify-center pt-3'>
                            <span>Already have an account?
                                <Link to={"/"} >
                                    <span className='no-underline text-blue-primary px-1'>Login</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
