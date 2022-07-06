import React from 'react'
import Button from './Button'
import options_icon from './Icons/more-options.svg'

// const changeOperation = (setOperation, newOp) => {
//     setOperation(previousState => {
//         return { ...previousState, newOp }
//     });
// }

export default function NavBar({ setOperation }) {
    return (
        <>
            <div className="flex justify-around bg-blue-background w-screen items-center absolute">
                <div className="py-2">
                    <span className="text-blue-primary text-3xl">CO</span>
                    <span className="text-red text-3xl">INR</span>
                </div>
                <div className="bg-blue-tertiary ml-20 px-1 rounded-xl">
                    {/* <div onClick={changeOperation(setOperation, "swap")}> */}
                    <Button bg_color={"red"} text={"Swap"} size={"small"} />
                    {/* </div> */}
                    {/* <div onClick={changeOperation(setOperation, "withdraw")}> */}
                    <Button bg_color={"blue-tertiary"} text={"Withdraw"} size={"small"} />
                    {/* </div> */}
                    <Button bg_color={"blue-tertiary"} text={"Rates"} size={"small"} />
                </div>
                <div className="flex justify-center items-center py-2">
                    <Button bg_color={"blue"} text={"Get Started"} size={"small"} />
                    <Button bg_color={"white"} text={"Help"} size={"small"} />
                    <img src={options_icon} alt="Options" className="h-5 w-5 mx-1 cursor-pointer" />
                </div>
            </div>
        </>
    )
}
