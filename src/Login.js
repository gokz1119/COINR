import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import eth_illustration from './Icons/ethereum-illustration.svg'

export default function Login() {
    return (
        <div className='flex justify-evenly items-center w-screen h-screen bg-blue-background'>
            <img src={eth_illustration} alt="Ethereum Illustration" />
            <div className='bg-blue-tertiary p-8 rounded-xl w-1/3'>
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
