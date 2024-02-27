import React from 'react'
import { dosis } from '@/app/layout'

interface FormFieldProps {
    label: string,
    type: string,
    placeholder?: string
} 

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder}) => {
  return (
    <div className='flex flex-col w-1/2 mt-4'>
        <label className={`${dosis.className} font-semibold text-lg`}>{label}</label>
        <input className='border border-black h-9' type={type} placeholder={placeholder} />
    </div>
  )
}

export default FormField;