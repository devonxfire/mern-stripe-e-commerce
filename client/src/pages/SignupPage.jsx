import React from "react";

export default function SingupPage() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      <div className="max-w-5xl  mx-auto pt-12">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-4xl hero-text text-center">
            Enter your deets to chow.
          </h1>
          <form className=" flex flex-col gap-2 w-full max-w-lg pt-12 px-4 text-slate-500">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="rounded-lg "
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="rounded-lg"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="rounded-lg"
            />
            <button className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
