import React from 'react'
import settings_icon from './Icons/settings.svg'
import eth_icon from './Icons/ethereum.svg'
import rupee_icon from './Icons/rupee-sign-solid.svg'
import arrow_icon from './Icons/arrow.svg'
import Input from './Input'
import Button from './Button'

export default function Withdraw() {
    return (
        <>
            <div className='bg-blue-background w-screen h-screen flex items-center justify-center'>
                <div className='bg-blue-tertiary rounded-xl py-3 px-4 w-auto max-w-md'>
                    <div className='pb-3 flex justify-between'>
                        <p className='text-white text-lg ml-2'>Withdraw</p>
                        <img src={settings_icon} alt="Settings" className="mr-2 cursor-pointer" />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='max-w-4/5'>
                            <Input placeholder={"0.0"} isDisabled={false} />
                        </div>
                        <img src={rupee_icon} alt="Rupee" className="h-5 w-5" />
                        <span className='text-white text-xl px-2'>CINR</span>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={arrow_icon} alt="Arrow" className='p-0.5 ml-1 rotate-90' />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <Input placeholder={"0.0"} isDisabled={true} />
                        <img src={rupee_icon} alt="Ethereum" className="h-5 w-5" />
                        <span className='text-white text-xl px-2'>INR</span>
                    </div>
                    <div className='my-4 w-full flex justify-center items-center'>
                        <Button bg_color={"red"} text={"Withdraw Now"} size={"large"} />
                    </div>
                </div>
            </div>
        </>
    )
}
