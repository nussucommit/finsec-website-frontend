import React from "react";
import Image from "next/image";

// This is just the dark blue background with NUSSU logo (without nav components) 
const Header: React.FC = () => {
    return (

        // Dark Blue background
        <div className="bg-darkblue w-full h-24 fixed top-0 left-0 z-50">
            
            {/* NUSSU Logo */}
            <div className="absolute bottom-0 left-0 h-8 w-auto">
                <Image
                    src="/images/nussulogo.png" 
                    alt="NUSSU LOGO"
                    width={96}
                    height={96}
                    />
            </div>

        </div>

    )
}

export default Header;