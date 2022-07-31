/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import dropdown_icon from './Icons/arrow-drop-down.svg'
import options_icon from './Icons/more-options.svg'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDown({ dropdown_text, options }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                {dropdown_text === 'desktop-more-options' &&
                    <>
                        <Menu.Button className="inline-flex justify-center items-center w-full text-white pl-2 py-1 m-1 rounded-md md:p-0">
                            <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer md:m-0" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-lg shadow-lg bg-blue-secondary focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to={"/"}>
                                                <span className={classNames(
                                                    active ? 'bg-blue-primary-variant rounded-lg text-white' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    {options[0]}
                                                </span>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                }
                {dropdown_text === 'mobile-more-options' &&
                    <>
                        <Menu.Button className="inline-flex justify-center items-center w-full text-white pl-2 py-1 m-1 rounded-md md:p-0">
                            <img src={options_icon} alt="Options" className="h-6 w-6 mx-1 cursor-pointer md:m-0" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-blue-secondary focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to={"/getstarted"}>
                                                <span className={classNames(
                                                    active ? 'bg-blue-primary-variant rounded-lg text-white' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    {options[0]}
                                                </span>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to={"/help"}>
                                                <span className={classNames(
                                                    active ? 'bg-blue-primary-variant rounded-lg text-white' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    {options[1]}
                                                </span>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link to={"/"}>
                                                <span className={classNames(
                                                    active ? 'bg-blue-primary-variant rounded-lg text-white' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}>
                                                    {options[2]}
                                                </span>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                }
                {(dropdown_text !== 'mobile-more-options' && dropdown_text !== 'desktop-more-options') &&
                    <>
                        <Menu.Button className="inline-flex justify-center items-center w-full bg-red text-white px-3 py-1 m-1 rounded-md
                    hover:bg-red-variant transition-all ease-in-out">
                            {dropdown_text}
                            <img src={dropdown_icon} alt='Dropdown' className='w-5 h-5 pl-1' />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 rounded-lg shadow-lg bg-blue-secondary focus:outline-none">
                                <div className="py-1">
                                    {options.map(option => (
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link to={"/" + option}>
                                                    <span className={classNames(
                                                        active ? 'bg-blue-primary-variant rounded-lg text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm text-left'
                                                    )}>
                                                        {option}
                                                    </span>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))
                                    }
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                }
            </div>
        </Menu >
    )
}
