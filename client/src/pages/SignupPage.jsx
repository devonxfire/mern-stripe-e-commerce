import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function SingupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        showToastError(data.error);
      }

      if (response.ok) {
        navigate("/signin");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      showToastError(error.message);
    }
  };

  const showToastError = (error) => {
    console.log("toasty error");
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      <div className="max-w-5xl  mx-auto pt-12">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-4xl hero-text text-center">
            Enter your deets to chow.
          </h1>
          <form
            className=" flex flex-col gap-2 w-full max-w-lg pt-12 px-4 text-slate-500"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="rounded-lg focus:outline-none focus:ring focus:ring-transparent focus:border-0"
              onChange={handleChange}
            />
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
            <button
              className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6 hover:text-red-500"
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </form>
          <Link to={"/signin"}>
            <div className="flex">
              <p className="text-white mt-4 text-sm">
                Have an account?{" "}
                <span className="text-blue-600 pl-1">Sign in</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
