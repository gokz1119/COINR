import React from 'react'
import NavBar from './NavBar'

export default function Rates() {
    return (
        <>
            <NavBar operation={"rates"} />
            <div className='w-screen h-screen bg-blue-background'>
                <div className='text-center pt-24'>
                    <h1 className='text-white p-6 font-bold text-4xl'>This page is not ready yet :(</h1>
                    <p className='text-gray text-xl'>Please come back later!</p>
                </div>
            </div>
        </>
    )
}
