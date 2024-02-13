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
        <div className="bg-darkblue w-full h-24 fixed top-0 left-0 z-50 flex justify-center items-center">
            
            {/* Title */}
            <div className="text-white text-4xl">
                <h1 className={biryani.className}>{title}</h1>
            </div>

            {/* NUSSU Logo */}
            <div className="absolute bottom-0 left-0 h-8 w-auto">
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