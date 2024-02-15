import React from "react";

export default function SingupPage() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      <div className="max-w-5xl  mx-auto pt-12">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-4xl hero-text text-center">
            Enter your deets to chow.
          </h1>
          <form className=" flex flex-col gap-2 w-full max-w-lg pt-12 px-4 ">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className=""
            />
            <input type="email" id="email" placeholder="Email" className="" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className=""
            />
          </form>
        </div>
      </div>
    </div>
  );
}
