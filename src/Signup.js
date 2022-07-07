import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import eth_illustration from './Icons/ethereum-illustration.svg'
import Input from './Input'

export default function Login() {
    return (
        <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                        md:flex-row md:justify-evenly'>
            <img src={eth_illustration} alt="Ethereum Illustration" className='max-w-xs md:max-w-none' />
            <div className='bg-blue-tertiary p-8 rounded-xl max-w-xs my-8 md:my-0 md:max-w-md'>
                <div className='flex justify-center pb-4'>
                    <span className='text-white text-3xl'>Welcome to</span>
                    <span className="text-blue-primary text-3xl pl-2">CO</span>
                    <span className="text-red text-3xl">INR</span>
                </div>
                <div>
                    <Input type={"text"} placeholder={"Name"} isDisabled={false} />
                    <Input type={"email"} placeholder={"Email"} isDisabled={false} />
                    <Input type={"text"} placeholder={"Bank Account Number"} isDisabled={false} />
                    <a href='/swap' className='mt-3'>
                        <Button bg_color={"red"} text={"Sign Up"} size={"large"} />
                    </a>
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
