import React from "react";
import Link from "next/link";
import { poppins } from "@/app/layout";

interface LSNavProps {
    currentPage: 'login' | 'signup';
}

const navLinks = [
    {href: 'login', label: 'Login'},
    {href: 'signup', label: 'Signup'}
];

const LSNavigation: React.FC<LSNavProps> = ({currentPage}) => {

    return (
        <nav className="absolute bottom-0 right-0 flex space-x-4 mr-4 mb-4">

            {
                navLinks.map(({href, label}) => (
                    <Link 
                        key={href}
                        href={href}
                        className={`${currentPage === href ? 'font-bold underline' : 'font-normal'} text-white ${poppins.className}`}>                        
                        {label}
                    </Link>
                ))
            }
      </nav>
    )
}

export default LSNavigation;