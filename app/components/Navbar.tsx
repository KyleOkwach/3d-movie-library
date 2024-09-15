'use client';
import { Gi3dGlasses } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import Link from "next/link";
import { NavLinks } from "../constants";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchArea from "./SearchArea";
import { useState } from "react";

export function Navbar() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div>
            <nav className="flex items-center justify-center fixed w-full top-0 left-0 bg-text/5 backdrop-blur-lg p-4 lg:px-72">
                <div className="flex flex-row w-full items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-8">
                        <div className="flex items-center justify-center">
                            <Link href="/">
                            <div className="flex flex-row logo-gradient">
                                <h3 className="text-2xl font-bold">3MDB</h3>
                                <Gi3dGlasses className="text-3xl text-primary" />
                            </div>
                            </Link>
                        </div>
                        <div className="flex flex-row gap-8">
                            { NavLinks.map((link, index) => (
                                <Link key={index} href={link.url}>
                                    <div className="flex flex-col gap-[2px] text-text relative text-md font-semibold group">
                                        <span className="bg-primary rounded-full w-0 group-hover:w-0 h-[2px] bottom-0 left-0 transition-all ease-in duration-150" />
                                        <h3 className="group-hover:text-primary">{link.name}</h3>
                                        <span className="bg-primary rounded-full w-0 group-hover:w-full h-[2px] bottom-0 left-0 transition-all ease-in duration-150" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button
                            onClick={() => setShowSearch(true)}
                            className="rounded-md bg-text/5 text-text border-solid w-64
                            border-[1px] border-text/10 focus:outline-none focus:border-solid focus:ring-0"
                        >
                            <div className="flex flex-row items-center justify-start p-1 px-2 gap-2 w-full">
                                <CiSearch className="text-text" />
                                <h3 className="text-sm opacity-70">Search...</h3>
                            </div>
                        </button>
                        <ThemeSwitcher className="rounded-md" />
                    </div>
                </div>
            </nav>
            <SearchArea className="" setShowSearch={ setShowSearch } showSearch={ showSearch } />
        </div>
    )
}