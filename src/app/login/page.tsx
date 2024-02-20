import Header from '@/components/Header'
import LSNavigation from '@/components/LSNavigation';

const Login = () => {

  return (
    <main>

      <Header title={"Log In Page"}>
        <LSNavigation currentPage='login'/>
      </Header> 

    </main>
  )
}

export default Login;