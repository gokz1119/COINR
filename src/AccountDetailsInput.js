import React from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import eth_illustration from './Icons/ethereum-illustration.svg'
import next_icon from './Icons/arrow-drop-down.svg'

export default function AccountDetailsInput() {
    return (
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
                    <Input type={"text"} placeholder={"Bank Name"} isDisabled={false} />
                    <Input type={"text"} placeholder={"Branch Name"} isDisabled={false} />
                    <Input type={"text"} placeholder={"Bank Account Number"} isDisabled={false} />
                    <Input type={"text"} placeholder={"IFSC Code"} isDisabled={false} />
                    <div className='flex justify-between items-center'>
                        <Link to={'/signup'}>
                            <div className='mt-3 w-20 border border-blue-primary hover:border-blue-primary-variant rounded-lg text-center py-2 pr-1 mx-1 flex justify-around items-center'>
                                <img src={next_icon} alt='Dropdown' className='w-5 h-5 ml-1.5 rotate-90' />
                                <span className='pr-1 text-lg text-blue-primary'>Back</span>
                            </div>
                        </Link>
                        <a href='/swap' className='mt-3'>
                            <div className='bg-red w-24 text-center py-2 mx-1 rounded-xl text-white text-xl
                        hover:bg-red-variant transition-all ease-in-out flex justify-around items-center'>
                                <span>Sign Up</span>
                            </div>
                        </a>
                    </div>
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
    )
}
