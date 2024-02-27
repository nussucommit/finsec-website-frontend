import React from "react";
import Image from "next/image";
import { biryani } from "@/app/layout";

interface HeaderProps {
    title: String,
    children?: React.ReactNode
}

// This is just the dark blue background with NUSSU logo (without nav components) 
const Header: React.FC<HeaderProps> = ({title, children}) => {
    return (

        // Dark Blue background
        <div className="flex w-full h-24 fixed top-0 left-0 bg-darkblue justify-center items-center drop-shadow-xl">
            
            {/* Title */}
            <div className="">
                <h1 className= {`${biryani.className} text-white text-4xl font-extrabold`}>{title}</h1>
            </div>

            {/* NUSSU Logo */}
            <div className="absolute bottom-0 left-0 h-8">
                <Image
                    src="/images/nussulogo.png" 
                    alt="NUSSU LOGO"
                    width={96}
                    height={96}
                    />
            </div>

            {/* Children (additional nav buttons, if any) */}
            {children}

        </div>

    )
}

export default Header;