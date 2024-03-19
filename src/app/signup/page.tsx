import Header from "@/components/Auth/Header";
import LSNavigation from "@/components/Auth/LSNavigation";
import Authbox from "@/components/Auth/Authbox";
import FormField from "@/components/Auth/FormField";
import Button from "@/components/Auth/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/slice";
import { biryani } from "../layout";
import { ThunkDispatch } from "@reduxjs/toolkit";

const Signup = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signUpUser({
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

  const dropdown = [
    "Cell #1",
    "Cell #2",
    "Cell #3",
    "Project #4",
    "Project #5",
    "Committee #6",
  ];

  return (
    <main className="flex flex-row h-screen justify-center">
      <Header title={"Sign Up Page"}>
        <LSNavigation currentPage="signup" />
      </Header>

      <Authbox>
        <h1
          className={`${biryani.className} font-extrabold text-4xl text-lightblue mt-12 mb-4`}
        >
          Welcome
        </h1>
        <FormField
          label="Name"
          type="text"
          placeholder=""
          change={handleChange}
          required
        />
        <FormField
          label="Cell/Committee/Project"
          type="select"
          placeholder=""
          required
          change={handleChange}
          options={dropdown}
        />
        <FormField
          label="Email"
          type="email"
          placeholder=""
          change={handleChange}
          required
        />
        <FormField
          label="Password"
          type="password"
          placeholder=""
          change={handleChange}
          required
        />
        <FormField
          label="Confirm Password"
          type="password"
          placeholder=""
          required
          change={handleChange}
        />
        <Button handleClick={() => handleSubmit} />
      </Authbox>
    </main>
  );
};

export default Signup;
