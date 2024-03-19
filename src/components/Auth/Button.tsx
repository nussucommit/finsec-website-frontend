'use client';

import React from 'react'
import { dosis } from '@/app/layout'

const Button = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button 
    className={`${dosis.className} 
      w-1/4 mt-8 p-2
      font-semibold 
        text-lg 
      text-white 
      hover:text-lightblue
      bg-greyblue 
      rounded-md
      drop-shadow-lg
      `} 
      onClick={handleClick}></button>
  )
}

export default Button;