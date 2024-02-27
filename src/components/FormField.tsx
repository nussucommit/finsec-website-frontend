import React from 'react'
import { dosis } from '@/app/layout'

interface FormFieldProps {
    label: string,
    type: string,
    placeholder?: string
} 

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder}) => {
  return (
    <div className='flex flex-col w-1/2'>
        <label className={`${dosis.className} font-semibold`}>{label}</label>
        <input className='border border-black' type={type} placeholder={placeholder} />
    </div>
  )
}

export default FormField;