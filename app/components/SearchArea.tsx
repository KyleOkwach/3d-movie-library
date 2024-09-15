'use client';

import { CiSearch } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

interface SearchAreaProps {
    className?: string,
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
    showSearch: boolean,
}

export default function SearchArea({ className, setShowSearch, showSearch }: SearchAreaProps) {
    return (
        <div className={`${showSearch ? 'flex': 'hidden'} items-center justify-center w-full h-screen fixed bottom-0 left-0 ${className}`}>
            <div
                className="fixed w-full h-full bg-background/70"
                onClick={() => setShowSearch(false)}
            />
            <div className="flex flex-col relative z-20 items-center p-4 rounded-md border-[1px] border-text/10 lg:w-1/3 md:h-1/2">
                <div className="flex flex-row w-full">
                    <div className="flex relative items-center w-full">
                        <div className="absolute w-8 flex items-center justify-center h-full">
                            <CiSearch className="text-text" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-1 px-8 rounded-md bg-text/5 text-text border-solid w-full
                            border-[1px] border-text/10 focus:outline-none focus:border-solid focus:ring-0"
                        />
                        <button
                            onClick={() => setShowSearch(false)}
                            className="absolute right-0 w-8 flex items-center justify-center h-full"
                        >
                            <FaXmark className="text-text" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}