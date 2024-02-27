import React from 'react'
import { dosis } from '@/app/layout'

const Button = ({label} : {label:string}) => {
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
      shadow-inner 
      `}>{label}</button>
  )
}

export default Button