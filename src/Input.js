import React from 'react'

// function togglePlaceholder(placeholder) {
//     if (placeholder === "")
//         placeholder = "0.0";
//     else
//         placeholder = "";
// }

export default function Input({ placeholder, isDisabled, type }) {
    return (
        <>
            {(!isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none mr-4 px-2 py-2 tracking-widest focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />
            }
            {(isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none mr-4 px-2 py-2 tracking-widest focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder} disabled
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />}
            {(!isDisabled && type === 'text' || type === 'email') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none w-full m-1 my-3 px-2 py-2 tracking-widest focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />
            }
        </>
    )
}
