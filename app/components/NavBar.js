'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'

const NavBar = () => {
    const { data: session } = useSession();
    return (
        <nav className='bg-gray-950 flex justify-between items-center bg-black h-16 px-4'>
            <Link href="/">
                <div className='logo font-bold text-white flex items-center justify-center'><span><img className="invertImg" src="./chai.gif" width={44} /></span>Get Me A Chai</div>
            </Link>
            {/* <ul className='flex text-white justify-between items-center gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Login</li>
                <li>Signup</li>
            </ul> */}
            <div className='flex'>
                {
                    session && <Dropdown />
                }
            </div>
            {
                !session && <div>
                    <Link href="/login">
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </Link>
                </div>
            }

        </nav>
    )
}

export default NavBar