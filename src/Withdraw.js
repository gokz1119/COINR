import React from 'react'
import settings_icon from './Icons/settings.svg'
import rupee_icon from './Icons/rupee-sign-solid.svg'
import arrow_icon from './Icons/arrow.svg'
import Input from './Input'
import Button from './Button'
import NavBar from './NavBar'

export default function Withdraw() {
    return (
        <>
            <NavBar operation={"withdraw"} />
            <div className='bg-blue-background w-screen h-screen flex items-center justify-center'>
                <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary rounded-xl py-3 px-4 max-w-xs md:max-w-md'>
                    <div className='pb-3 flex justify-between'>
                        <p className='text-white text-lg ml-2'>Withdraw</p>
                        <img src={settings_icon} alt="Settings" className="mr-2 cursor-pointer" />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='w-3/5 md:w-4/5'>
                            <Input type={"number"} placeholder={"0.0"} isDisabled={false} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={rupee_icon} alt="Rupee" className="h-5 w-5" />
                            <span className='text-white text-xl px-1 md:px-2'>CINR</span>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={arrow_icon} alt="Arrow" className='p-0.5 ml-1 rotate-90' />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='w-3/5 md:w-4/5'>
                            <Input type={"number"} placeholder={"0.0"} isDisabled={true} />
                        </div>
                        <div className='flex justify-start items-center pr-3 md:pr-0'>
                            <img src={rupee_icon} alt="Ethereum" className="h-5 w-5" />
                            <span className='text-white text-xl px-1 md:px-2'>INR</span>
                        </div>
                    </div>
                    <div className='my-4 w-full flex justify-center items-center'>
                        <Button bg_color={"red"} text={"Withdraw Now"} size={"large"} />
                    </div>
                </div>
            </div>
        </>
    )
}
