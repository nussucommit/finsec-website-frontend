import React from 'react'
import { dosis } from '@/app/layout'

interface FormFieldProps {
    label: string,
    type: string,
    placeholder?: string,
    required?: boolean,
    options?: string[]
} 

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, required, options}) => {

  return (
    <div className='flex flex-col w-1/2 mt-4'>
        <label className={`${dosis.className} font-semibold text-lg`}>
            {label} {required && <span className='text-red-500'>*</span>}
        </label>

        {/* Conditionally make it a dropdown cell, if options string[] is passed in */}
        {/* Else, its just a normal input text box */}

        {type === 'select' && options 
            ? 
            <select className='border border-black h-9 p-1 drop-shadow-lg'>
                { options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select> 
            : 
            <input className='border border-black h-9 p-2 drop-shadow-lg' type={type} placeholder={placeholder} />}
        
    </div>
  )
}

export default FormField;