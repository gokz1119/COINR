import React from 'react'

// function togglePlaceholder(placeholder) {
//     if (placeholder === "")
//         placeholder = "0.0";
//     else
//         placeholder = "";
// }

export default function Input({ placeholder, isDisabled }) {
    return (
        <>
            {!isDisabled &&
                <input type="text" className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none mr-4 px-2 py-2 tracking-widest focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />
            }
            {isDisabled &&
                <input type="text" className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none mr-4 px-2 py-2 tracking-widest focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder} disabled
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />}
        </>
    )
}
