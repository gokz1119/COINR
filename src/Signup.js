import React from 'react'
import { Link } from 'react-router-dom'
import eth_illustration from './Icons/ethereum-illustration.svg'
import Input from './Input'
import next_icon from './Icons/arrow-drop-down.svg'

export default function Login() {
    return (
        <>
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
                        <Input type={"text"} placeholder={"Name"} isDisabled={false} />
                        <Input type={"email"} placeholder={"Email"} isDisabled={false} />
                        <div className='flex flex-row-reverse'>
                            <Link to={'/accountdetails'}>
                                <div className='bg-red w-24 text-center py-2 m-1 rounded-xl text-white text-xl
                        hover:bg-red-variant transition-all ease-in-out flex justify-around items-center'>
                                    <span className='pl-3'>Next</span>
                                    <img src={next_icon} alt='Dropdown' className='w-5 h-5 mr-1.5 -rotate-90' />
                                </div>
                            </Link>
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
        </>
    )
}
