import { signUpUser } from "../redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const handleLogin = async (name: string, email: string, password: string) => {
        await dispatch(signUpUser({ username: name , email, password })) 
    }

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="username">Email:</label>
        <input type="text" id="username" name="username" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit" onClick={() => handleLogin(name, email, password)}>Login</button>
      </form>
    </div>
  );
}
