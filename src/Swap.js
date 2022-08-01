import { React, useState } from 'react'
import eth_icon from './Icons/ethereum.svg'
import rupee_icon from './Icons/rupee-sign-solid.svg'
import swap_icon from './Icons/swap.svg'
import Input from './Input'
import NavBar from './NavBar'
import { ethers } from 'ethers'
import { ethereum } from './Login'

export default function Swap({ contractAddress, abi, walletAddress }) {
    const [ethVal, setEthVal] = useState(0.0)
    const [cinrVal, setCinrVal] = useState(0.0)
    const [hash, setHash] = useState(null)
    const [blockNo, setBlockNo] = useState(null)

    const swapAmount = async () => {
        try {

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const coinrContract = new ethers.Contract(contractAddress, abi, signer);

                console.log("Initialize payment");

                const balanceInWallet = await provider.getBalance(walletAddress);
                console.log(ethers.utils.formatEther(balanceInWallet));
                const balanceEth = ethers.utils.formatEther(balanceInWallet)

                if (ethVal <= 0) {
                    alert("Invalid amount!");
                    setEthVal(0);
                    return;
                }

                if (ethVal > balanceEth) {
                    alert("Insufficient balance in wallet!");
                    return;
                }

                let swapTxn = await coinrContract.coinSwap({ value: ethers.utils.parseEther(ethVal) });

                setHash(swapTxn.hash);


                const receipt = await swapTxn.wait();
                setBlockNo(receipt.blockNumber)

                console.log(swapTxn);
            }
        } catch (err) {
            alert("Transaction failed!");
            console.log(err);
        }
    }
    return (
        <>
            <NavBar operation={"swap"} />
            <div className='bg-blue-background w-screen h-screen flex flex-col items-center justify-center'>
                <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary rounded-xl py-3 px-4 w-auto max-w-xs md:max-w-md'>
                    <div className='pb-3 flex justify-between'>
                        <p className='text-white text-lg ml-2 my-1'>Swap</p>
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='w-3/5 md:w-4/5'>
                            <Input type={"number"} placeholder={"0"} isDisabled={false} value={ethVal} setValue={setEthVal} setValue2={setCinrVal} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={eth_icon} alt="Ethereum" className="h-5 w-5" />
                            <span className='text-white text-xl px-1 md:px-2'>ETH</span>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={swap_icon} alt="Swap" className='p-0.5 ml-1 cursor-pointer' />
                    </div>
                    <div className='flex justify-between items-center bg-blue-secondary px-3 rounded-md'>
                        <div className='w-3/5 md:w-4/5'>
                            <Input type={"number"} placeholder={"0.0"} value={cinrVal} isDisabled={true} />
                        </div>
                        <div className='flex justify-start items-center'>
                            <img src={rupee_icon} alt="Rupee" className="h-5 w-5" />
                            <span className='text-white text-xl px-1 md:px-2'>CINR</span>
                        </div>
                    </div>
                    <div className='my-4 w-full flex justify-center items-center'>
                        <button className="bg-red text-white text-xl w-full py-2 m-1 rounded-xl
                hover:bg-red-variant transition-all ease-in-out" onClick={() => { swapAmount() }}>
                            Swap Now
                        </button>
                    </div>
                </div>
                {(hash || blockNo) &&
                    <div className='block mt-10 bg-blue-tertiary shadow-lg shadow-blue-secondary rounded-xl py-3 px-4 w-auto text-white max-w-xs md:max-w-none'>
                        {hash &&
                            <>
                                <p>Transaction Hash:</p>
                                <p className='text-blue-primary'>{hash}</p>
                            </>
                        }
                        {blockNo &&
                            <p>Transaction confirmed on block: <span className='text-red'>{blockNo}</span></p>
                        }
                    </div>
                }
            </div>

        </>
    )
}
