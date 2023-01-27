import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    const navIteam = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Blog",
            path: "/blogs"
        },

        {
            name: "Contact",
            path: "/contact"
        },


    ]


        ;
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg  md:py-3 fixed z-50 md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navIteam.map(iteam => {
                                    return (
                                        <li key={iteam.path}>
                                            <Link className='font-semibold text-xl' href={iteam.path}>{iteam.name}</Link>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                    <Link href={"/"}>
                        <Image src={"/logo.png"} alt="logo" height={80} width={200} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navIteam.map(iteam => {
                                return (
                                    <li key={iteam.path}>
                                        <Link className='font-semibold text-xl' href={iteam.path}>{iteam.name}</Link>
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Get started</a>
                </div>
            </div>
        </div>
    )
}

export default Nav