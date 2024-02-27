import Authbox from '@/components/Authbox';
import FormField from '@/components/FormField';
import Header from '@/components/Header'
import LSNavigation from '@/components/LSNavigation';
import { biryani } from '../layout';
import { dosis } from '../layout';

const Login = () => {

  return (
    <main className='flex flex-row h-screen justify-center'>

      {/* Header is 'fixed' positioned, so flex wtv doesn't affect this*/}
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
        <button className={`${dosis.className} 
          w-1/4 mt-4 p-4 
          font-semibold 
          text-lg 
          text-white 
          hover:text-lightblue
          bg-greyblue 
          rounded-md
          shadow-inner 
          `}>Log In</button>
      </Authbox>

  </main>
  )
}

export default Login;