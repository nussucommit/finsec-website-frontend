import Header from "@/components/Auth/Header";
import LSNavigation from "@/components/Auth/LSNavigation";
import Authbox from "@/components/Auth/Authbox";
import FormField from "@/components/Auth/FormField";
import Button from "@/components/Auth/Button";

import { biryani } from "../layout";
import { dosis } from "../layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice";

import { ThunkDispatch } from "@reduxjs/toolkit";

const Login = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginUser({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <main className="flex flex-row h-screen justify-center">
      <Header title={"Log In Page"}>
        <LSNavigation currentPage="login" />
      </Header>

      <Authbox>
        <h1
          className={`${biryani.className} font-extrabold text-4xl text-lightblue mt-24 mb-4`}
        >
          Welcome
        </h1>
        <FormField
          label="Email"
          type="email"
          placeholder=""
          change={handleChange}
        />
        <FormField
          label="Password"
          type="password"
          placeholder=""
          change={handleChange}
        />
        <button
          className={`${dosis.className} 
          font-normal 
          text-lg 
          text-lightblue 
          underline 
          mt-8 
          drop-shadow-lg`}
        >
          Forgot Password
        </button>

        <Button handleClick={() => handleSubmit} />
      </Authbox>
    </main>
  );
};

export default Login;
