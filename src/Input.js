import React from 'react'

export default function Input({ placeholder, isDisabled, type, value, setValue }) {
    return (
        <>
            {(!isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none px-2 py-2 tracking-wider focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />
            }
            {(isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none px-2 py-2 tracking-wider focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder} disabled
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />}
            {(!isDisabled && (type === 'text' || type === 'email')) &&
                <input type={type} className='bg-blue-secondary text-white text-lg rounded-md 
                    text-left border-none w-full m-1 my-3 px-2 py-2 tracking-wide focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    value={value}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder}
                    onChange={(e) => setValue(e.target.value)} />
            }
        </>
    )
}
