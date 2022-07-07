import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import options_icon from './Icons/more-options.svg'
import DropDown from './Dropdown'

export default function NavBar({ operation }) {
    return (
        <>
            {operation === "swap" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                    <div className="py-2">
                        <span className="text-blue-primary text-2xl md:text-3xl">CO</span>
                        <span className="text-red text-2xl md:text-3xl">INR</span>
                    </div>
                    <div className="hidden md:block md:bg-blue-tertiary md:ml-20 md:px-1 md:rounded-xl">
                        <Link to={"/swap"} >
                            <Button bg_color={"red"} text={"Swap"} size={"small"} />
                        </Link>
                        <Link to={"/withdraw"}>
                            <Button bg_color={"blue-tertiary"} text={"Withdraw"} size={"small"} />
                        </Link>
                        <Link to={"/rates"}>
                            <Button bg_color={"blue-tertiary"} text={"Rates"} size={"small"} />
                        </Link>
                    </div>
                    <div className="hidden md:flex justify-center items-center py-2">
                        <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        <Button bg_color={"white"} text={"Help"} size={"small"} />
                        <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                    </div>
                    <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden'>
                        <DropDown dropdown_text={"Swap"} options={["Withdraw", "Rates"]} />
                        <DropDown dropdown_text={"more-options"} options={["Get Started", "Help", "Your Profile", "Log Out"]} />
                    </div>
                </div>
            }
            {operation === "withdraw" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                <div className="py-2">
                    <span className="text-blue-primary text-2xl md:text-3xl">CO</span>
                    <span className="text-red text-2xl md:text-3xl">INR</span>
                </div>
                <div className="hidden md:block md:bg-blue-tertiary md:ml-20 md:px-1 md:rounded-xl">
                    <Link to={"/swap"} >
                        <Button bg_color={"blue-tertiary"} text={"Swap"} size={"small"} />
                    </Link>
                    <Link to={"/withdraw"}>
                        <Button bg_color={"red"} text={"Withdraw"} size={"small"} />
                    </Link>
                    <Link to={"/rates"}>
                        <Button bg_color={"blue-tertiary"} text={"Rates"} size={"small"} />
                    </Link>
                </div>
                <div className="hidden md:flex justify-center items-center py-2">
                    <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                    <Button bg_color={"white"} text={"Help"} size={"small"} />
                    <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                </div>
                <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden'>
                    <DropDown dropdown_text={"Withdraw"} options={["Swap", "Rates"]} />
                    <DropDown dropdown_text={"more-options"} options={["Get Started", "Help", "Your Profile", "Log Out"]} />
                </div>
            </div>
            }
            {operation === "rates" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                <div className="py-2">
                    <span className="text-blue-primary text-2xl md:text-3xl">CO</span>
                    <span className="text-red text-2xl md:text-3xl">INR</span>
                </div>
                <div className="hidden md:block md:bg-blue-tertiary md:ml-20 md:px-1 md:rounded-xl">
                    <Link to={"/swap"} >
                        <Button bg_color={"blue-tertiary"} text={"Swap"} size={"small"} />
                    </Link>
                    <Link to={"/withdraw"}>
                        <Button bg_color={"blue-tertiary"} text={"Withdraw"} size={"small"} />
                    </Link>
                    <Link to={"/rates"}>
                        <Button bg_color={"red"} text={"Rates"} size={"small"} />
                    </Link>
                </div>
                <div className="hidden md:flex justify-center items-center py-2">
                    <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                    <Button bg_color={"white"} text={"Help"} size={"small"} />
                    <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                </div>
                <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden'>
                    <DropDown dropdown_text={"Rates"} options={["Swap","Withdraw"]} />
                    <DropDown dropdown_text={"more-options"} options={["Get Started", "Help", "Your Profile", "Log Out"]} />
                </div>
            </div>
            }
        </>
    )
}
