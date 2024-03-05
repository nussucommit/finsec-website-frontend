import Header from '@/components/Auth/Header'
import LSNavigation from '@/components/Auth/LSNavigation';
import Authbox from '@/components/Auth/Authbox';
import FormField from '@/components/Auth/FormField';
import Button from '@/components/Auth/Button';

import { biryani } from '../layout';

const Signup = () => {

  const dropdown = ['Cell #1', 'Cell #2', 'Cell #3', 'Project #4', 'Project #5', 'Committee #6']; 

  return (
    <main className='flex flex-row h-screen justify-center'>

      <Header title={"Sign Up Page"}>
        <LSNavigation currentPage='signup'/>
      </Header> 

      <Authbox>
        <h1 className={`${biryani.className} font-extrabold text-4xl text-lightblue mt-12 mb-4`}>Welcome</h1>
        <FormField label='Name' type='text' placeholder='' required/>
        <FormField label='Cell/Committee/Project' type='select' placeholder='' required options={dropdown}/>
        <FormField label='Email' type='email' placeholder='' required/>
        <FormField label='Password' type='password' placeholder='' required/>
        <FormField label='Confirm Password' type='password' placeholder='' required/>

        <Button label='Sign Up'/>
        
      </Authbox>

    </main>
  )
}

export default Signup;