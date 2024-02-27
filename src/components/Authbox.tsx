import React from 'react'

interface AuthboxProps {
    children?: React.ReactNode;
}


const Authbox: React.FC<AuthboxProps> = ({ children }) => {
  return (
    <div className='flex flex-col mt-24 bg-gray-100 w-1/2 items-center'>
        { children }
    </div>
  )
}

export default Authbox;