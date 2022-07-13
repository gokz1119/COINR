import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import eth_illustration from './Icons/ethereum-illustration.svg'

export default function Login() {
    return (
        <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                        md:flex-row md:justify-evenly'>
            <img src={eth_illustration} alt="Ethereum Illustration" className='w-64 md:w-1/4' />
            <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 md:mb-0 md:max-w-md'>
                <div className='flex justify-center pb-4'>
                    <span className='text-white text-3xl'>Welcome to</span>
                    <span className="text-blue-primary text-3xl pl-2">CO</span>
                    <span className="text-red text-3xl">INR</span>
                </div>
                <a href='/swap'>
                    <Button bg_color={"red"} text={"Login with Metamask"} size={"large"} />
                </a>
                <div className='text-white flex justify-center pt-3'>
                    <span>Don't have an account?
                        <Link to={'/signup'} className='no-underline text-blue-primary px-1'>Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
