'use client';
import Header from '@/components/Header'
import { poppins } from '../layout'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {

  const pathname = usePathname();

  const navElements = [
    {label: "Login", href: "/login"},
    {label: "Signup", href: "/signup"},
  ];

  return (
    <main>
      <Header title={"Sign Up Page"}>
      
        <div className='absolute bottom-0 right-0 flex space-x-4 mr-4 mb-4'>

        {navElements.map(({label, href}) => (
            <Link
              key={label}
              href={href}
              className= {pathname === href ? "active text-white font-bold underline" : "text-white"}>
              <p className={poppins.className}>{label}</p>
            </Link>
          ))}
 
        </div>
      
      </Header>
    </main>
  )
}
