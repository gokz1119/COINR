import { React, useState } from 'react'

function onNumberChange(e, setValue, setValue2) {
    setValue(e.target.value)
    const cinrValue = (e.target.value * 134764.55).toFixed(2)
    setValue2(cinrValue)
}

export default function Input({ placeholder, isDisabled, type, value, setValue, setValue2, inpErr, setInpErr }) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <>
            {(!isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none px-2 py-2 tracking-wider focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder}
                    onChange={(e) => onNumberChange(e, setValue, setValue2)} />
            }
            {(isDisabled && type === 'number') &&
                <input type={type} className='bg-blue-secondary text-white text-xl rounded-md 
                    text-left border-none px-2 py-2 tracking-wider focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    value={value}
                    disabled
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder} />}
            {(!isDisabled && (type === 'text' || type === 'email')) && inpErr &&
                <input type={type} className='bg-blue-secondary text-white text-lg rounded-md 
                    text-left border-2 border-red w-full m-1 my-3 px-2 py-2 tracking-wide focus:outline-none
                    placeholder:text-white'
                    placeholder={placeholder}
                    value={value}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder}
                    onChange={(e) => {
                        setValue(e.target.value);
                        setInpErr(false);
                        setIsFocus(true);
                    }}
                    autoFocus />
            }
            {(!isDisabled && (type === 'text' || type === 'email')) && !inpErr && !isFocus &&
                <input type={type} className='bg-blue-secondary text-white text-lg rounded-md 
                    text-left border-none w-full m-1 my-3 px-2 py-2 tracking-wide focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    value={value}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder}
                    onChange={(e) => setValue(e.target.value)} 
                    />
            }
            {(!isDisabled && (type === 'text' || type === 'email')) && !inpErr && isFocus &&
                <input type={type} className='bg-blue-secondary text-white text-lg rounded-md 
                    text-left border-none w-full m-1 my-3 px-2 py-2 tracking-wide focus:outline-none 
                    placeholder:text-white'
                    placeholder={placeholder}
                    value={value}
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = placeholder}
                    onChange={(e) => setValue(e.target.value)} 
                    autoFocus/>
            }

        </>
    )
}
