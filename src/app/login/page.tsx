import Authbox from '@/components/Authbox';
import FormField from '@/components/FormField';
import Header from '@/components/Header'
import LSNavigation from '@/components/LSNavigation';
import { biryani } from '../layout';

const Login = () => {

  return (
    <main className='flex flex-row h-screen justify-center'>

      {/* Header is 'fixed' positioned, so flex wtv doesn't affect this*/}
      <Header title={"Log In Page"}>
        <LSNavigation currentPage='login'/>
      </Header> 
      
      <Authbox>
        <h1 className={`${biryani.className} font-extrabold text-4xl text-lightblue`}>Welcome</h1>
        <FormField label='Email' type='email' placeholder=''/>
        <FormField label='Password' type='password' placeholder=''/>
      </Authbox>

  </main>
  )
}

export default Login;