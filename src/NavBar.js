import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import options_icon from './Icons/more-options.svg'

export default function NavBar({ operation }) {
    return (
        <>
            {operation === "swap" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                    <div className="py-2">
                        <span className="text-blue-primary text-3xl">CO</span>
                        <span className="text-red text-3xl">INR</span>
                    </div>
                    <div className="bg-blue-tertiary ml-20 px-1 rounded-xl">
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
                    <div className="flex justify-center items-center py-2">
                        <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        <Button bg_color={"white"} text={"Help"} size={"small"} />
                        <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                    </div>
                </div>
            }
            {operation === "withdraw" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                    <div className="py-2">
                        <span className="text-blue-primary text-3xl">CO</span>
                        <span className="text-red text-3xl">INR</span>
                    </div>
                    <div className="bg-blue-tertiary ml-20 px-1 rounded-xl">
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
                    <div className="flex justify-center items-center py-2">
                        <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        <Button bg_color={"white"} text={"Help"} size={"small"} />
                        <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                    </div>
                </div>
            }
            {operation === "rates" &&
                <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                    <div className="py-2">
                        <span className="text-blue-primary text-3xl">CO</span>
                        <span className="text-red text-3xl">INR</span>
                    </div>
                    <div className="bg-blue-tertiary ml-20 px-1 rounded-xl">
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
                    <div className="flex justify-center items-center py-2">
                        <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                        <Button bg_color={"white"} text={"Help"} size={"small"} />
                        <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer" />
                    </div>
                </div>
            }
        </>
    )
}
