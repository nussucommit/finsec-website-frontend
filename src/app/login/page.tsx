import Header from '@/components/Auth/Header'
import LSNavigation from '@/components/Auth/LSNavigation';
import Authbox from '@/components/Auth/Authbox';
import FormField from '@/components/Auth/FormField';
import Button from '@/components/Auth/Button';

import { biryani } from '../layout';
import { dosis } from '../layout';

const Login = () => {

  return (
    <main className='flex flex-row h-screen justify-center'>

      <Header title={"Log In Page"}>
        <LSNavigation currentPage='login'/>
      </Header> 
      
      <Authbox>
        <h1 className={`${biryani.className} font-extrabold text-4xl text-lightblue mt-24 mb-4`}>Welcome</h1>
        <FormField label='Email' type='email' placeholder=''/>
        <FormField label='Password' type='password' placeholder=''/>
        <button className={`${dosis.className} 
          font-normal 
          text-lg 
          text-lightblue 
          underline 
          mt-8 
          drop-shadow-lg`}>Forgot Password</button>
  
        <Button label='Log In'/>

      </Authbox>

  </main>
  )
}

export default Login;