import React from 'react'

export default function Button({ bg_color, text, size }) {
    return (
        <>
            {(bg_color === "blue" && size === "small") &&
                <button className="bg-blue-primary text-white px-3 py-1 m-1 rounded-lg
                    hover:bg-blue-primary-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "red" && size === "small") &&
                <button className="bg-red text-white px-3 py-1 m-1 rounded-lg
                    hover:bg-red-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "white" && size === "small") &&
                <button className="text-white border-blue-primary border px-3 py-1 m-1 rounded-lg
                    hover:text-blue-primary transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "blue-tertiary" && size === "small") &&
                <button className="bg-blue-tertiary text-gray px-3 py-1 m-1 rounded-lg
                    hover:text-white">
                    {text}
                </button>
            }

            {(bg_color === "blue" && size === "medium") &&
                <button className="bg-blue-primary text-white py-1 m-1 rounded-xl
                hover:bg-blue-primary-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "red" && size === "medium") &&
                <button className="bg-red text-white text-xl py-2 m-1 rounded-xl
                hover:bg-red-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "white" && size === "medium") &&
                <button className="text-white border-blue-primary border py-1 m-1 rounded-xl
                hover:text-white transition-all ease-in-out">
                    {text}
                </button>
            }

            {(bg_color === "blue" && size === "medium") &&
                <button className="bg-blue-primary text-white py-1 m-1 rounded-xl
                hover:bg-blue-primary-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "red" && size === "large") &&
                <button className="bg-red text-white text-xl w-full py-2 m-1 rounded-xl
                hover:bg-red-variant transition-all ease-in-out">
                    {text}
                </button>
            }
            {(bg_color === "white" && size === "large") &&
                <button className="text-white border-blue-primary border w-full py-1 m-1 rounded-xl
                hover:text-white transition-all ease-in-out">
                    {text}
                </button>
            }
        </>
    )
}
