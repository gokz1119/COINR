import React from 'react'
import settings_icon from './Icons/settings.svg'
import eth_icon from './Icons/ethereum.svg'
import rupee_icon from './Icons/rupee-sign-solid.svg'
import swap_icon from './Icons/swap.svg'
import Input from './Input'
import Button from './Button'
import NavBar from './NavBar'

export default function Swap() {
    return (
        <>
            <NavBar operation={"swap"} />
            <div className='bg-blue-background w-screen h-screen flex items-center justify-center'>
                <div className='bg-blue-tertiary rounded-xl py-3 px-4 w-auto max-w-md'>
                    <div className='pb-3 flex justify-between'>
                        <p className='text-white text-lg ml-2'>Swap</p>
                        <img src={settings_icon} alt="Settings" className="mr-2 cursor-pointer" />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='max-w-4/5'>
                            <Input type={"number"} placeholder={"0.0"} isDisabled={false} />
                        </div>
                        <img src={eth_icon} alt="Ethereum" className="h-5 w-5" />
                        <span className='text-white text-xl px-2'>ETH</span>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={swap_icon} alt="Swap" className='p-0.5 ml-1 cursor-pointer' />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <Input type={"number"} placeholder={"0.0"} isDisabled={true} />
                        <img src={rupee_icon} alt="Rupee" className="h-5 w-5" />
                        <span className='text-white text-xl px-2'>CINR</span>
                    </div>
                    <div className='my-4 w-full flex justify-center items-center'>
                        <Button bg_color={"red"} text={"Swap Now"} size={"large"} />
                    </div>
                </div>
            </div>

        </>
    )
}
