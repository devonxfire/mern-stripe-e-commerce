import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signinStart,
  signinSuccess,
  signinFailure,
} from "../redux/user/userSlice";

export default function SinginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinStart());

    try {
      const response = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        return console.log(data.message);
      }
      dispatch(signinSuccess(data));
      navigate("/profile");

      console.log(data);
    } catch (error) {
      dispatch(signinFailure(error.message));
      console.log(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      <div className="max-w-5xl  mx-auto pt-12">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-4xl hero-text text-center">
            Welcome back.
          </h1>
          <form
            className=" flex flex-col gap-2 w-full max-w-lg pt-12 px-4 text-slate-500"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="rounded-lg focus:outline-none focus:ring focus:ring-transparent focus:border-0"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="rounded-lg focus:outline-none focus:ring focus:ring-transparent focus:border-0"
              onChange={handleChange}
            />
            <button className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6 hover:text-red-500">
              Sign in
            </button>
          </form>
          <Link to={"/signup"}>
            <div className="flex">
              <p className="text-white mt-4 text-sm">
                Don&apos;t have an account?{" "}
                <span className="text-blue-600 pl-1">Sign up</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
