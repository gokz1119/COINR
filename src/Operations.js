import React, { useState } from 'react'
import NavBar from './NavBar';
import Swap from './Swap'

const [operation, setOperation] = useState("swap");

export default function Operations() {
    return (
        <>
            <NavBar setOperation={setOperation} />
            {operation === "swap" &&
                <Swap />
            }
            {/* {operation === "withdraw" &&
                } */}
        </>
    )
}
