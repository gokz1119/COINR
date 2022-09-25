import React from 'react'
import help_img from './Icons/help.svg';
import NavBar from './NavBar';

export default function Help() {
    return (
        <>
            <NavBar operation={"help"} />
            <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                        md:flex-row md:justify-evenly'>
                <img src={help_img} alt="Ethereum Illustration" className='w-64 md:w-1/4' />
                <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary p-8 rounded-xl max-w-xs my-8 mt-44 md:mt-0 md:my-0 md:max-w-2xl'>
                    <div className='flex justify-center pb-3 text-white text-2xl md:text-3xl'>
                        <span>How to use</span>
                        <span className="text-blue-primary pl-1.5 text-2xl md:text-3xl">CO</span>
                        <span className="text-red text-2xl md:text-3xl">INR</span>?
                    </div>
                    <div className='h-1 w-full flex justify-center items-center mx-1'>
                        <div className='h-1 w-full mr-2 bg-blue-primary'></div>
                    </div>
                    <div className='text-white text-xl mt-2 ml-2'>
                        <div className='mb-2 text-center'>Swap your <span className='text-red'>ETH</span> to <span className='text-blue-primary'>CINR</span> in just 3 easy steps!</div>
                        <div className='mb-3'>
                            <div className='bg-blue-primary p-0.5 rounded-full w-8 text-center inline-block mr-1 mb-1'>1</div>
                            <div className='ml-1 inline-block'>Login using your Metamask wallet</div>
                        </div>
                        <div className='mb-3'>
                            <div className='bg-blue-primary p-0.5 rounded-full w-8 text-center inline-block mr-1 mb-1'>2</div>
                            <div className='ml-1 inline-block'>Enter the amount of ETH that you would like to swap</div>
                        </div>
                        <div className='mb-4'>
                            <div className='bg-blue-primary p-0.5 rounded-full w-8 text-center inline-block mr-1 mb-1'>3</div>
                            <div className='ml-1 inline-block'>Click on "Swap Now" and confirm the transaction on Metamask</div>
                        </div>
                        <div className='text-right'>
                            Stay tuned for more features...
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
