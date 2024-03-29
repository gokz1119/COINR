import { React, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button';
import eth_illustration from './Icons/ethereum-illustration.svg'
import NavBar from './NavBar';

export const ethereum = window.ethereum;

function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            const account = accounts[0];
            onConnected(account);
            return;
        }

        if (isMobileDevice()) {
            await connect(onConnected);
        }
    }
}

function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <a href={metamaskAppDeepLink}>
                <button className="bg-red text-white text-xl w-full py-2 m-1 rounded-xl
                hover:bg-red-variant transition-all ease-in-out">
                    Login with MetaMask
                </button>
            </a>
        );
    }


    return (
        <button className="bg-red text-white text-xl w-full py-2 m-1 rounded-xl
      hover:bg-red-variant transition-all ease-in-out" onClick={() => connect(setUserAddress)}>
            Login with MetaMask
        </button>
    );
}

function ChangePage({ walletAddress, setWalletAddress, userAddress }) {
    const navigate = useNavigate();
    setWalletAddress(userAddress);
    console.log("Wallet address:", walletAddress);
    navigate('/swap');
}

export default function Login({ walletAddress, setWalletAddress }) {
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        checkIfWalletIsConnected(setUserAddress);
    }, []);

    return (
        <>
            <NavBar operation={"home"} />
            <div className='flex flex-col-reverse justify-center items-center w-screen h-screen bg-blue-background
                        md:flex-row md:justify-evenly'>
                <img src={eth_illustration} alt="Ethereum Illustration" className='w-64 md:w-1/4' />
                <div className='bg-blue-tertiary shadow-lg shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 mt-10 md:mt-0 md:mb-0 md:max-w-md'>
                    <div className='flex justify-center pb-4'>
                        <span className='text-white text-3xl'>Welcome to</span>
                        <span className="text-blue-primary text-3xl pl-2">CO</span>
                        <span className="text-red text-3xl">INR</span>
                    </div>

                    {userAddress &&
                        <>
                            <ChangePage walletAddress={walletAddress} setWalletAddress={setWalletAddress} userAddress={userAddress} />
                            <Link to={'/swap'}>
                                <Button bg_color={"red"} text={"Go to Swap page"} size={"large"} />
                            </Link>
                        </>
                    }
                    {!userAddress &&
                        <Connect setUserAddress={setUserAddress} />
                    }
                    <div className='text-white flex justify-center pt-3'>
                        <span>Don't have an account?
                            <Link to={'/signup'} className='no-underline text-blue-primary px-1'>Sign Up</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
