import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
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
                        <Link to={'/signup'}>
                            <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        </Link>
                        <DropDown dropdown_text={"desktop-more-options"} options={["Log Out"]} />
                    </div>
                    <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden'>
                        <DropDown dropdown_text={"Swap"} options={["Withdraw", "Rates"]} />
                        <DropDown dropdown_text={"mobile-more-options"} options={["Get Started", "Log Out"]} />
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
                        <Link to={'/signup'}>
                            <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        </Link>
                        <DropDown dropdown_text={"desktop-more-options"} options={["Log Out"]} />
                    </div>
                    <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden'>
                        <DropDown dropdown_text={"Withdraw"} options={["Swap", "Rates"]} />
                        <DropDown dropdown_text={"mobile-more-options"} options={["Get Started", "Log Out"]} />
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
                        <Link to={'/signup'}>
                            <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        </Link>
                        <DropDown dropdown_text={"desktop-more-options"} options={["Log Out"]} />
                    </div>
                    <div className='flex justify-center items-center rounded-lg px-1 py-2 my-2 md:hidden z-10'>
                        <DropDown dropdown_text={"Rates"} options={["Swap", "Withdraw"]} />
                        <DropDown dropdown_text={"mobile-more-options"} options={["Get Started", "Log Out"]} />
                    </div>
                </div>
            }
        </>
    )
}
