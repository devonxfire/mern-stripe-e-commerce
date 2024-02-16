import { Link } from "react-router-dom";
import bigburger from "../assets/bigburger.png";
import earth from "../assets/earth.png";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      {/* Heading and Hero pic */}
      <div className="max-w-5xl mx-auto px-6 ">
        <div className="border-b pb-12">
          <div className=" flex items-center">
            <div className="">
              <img
                src={bigburger}
                alt="bigburger"
                className="w-[54rem] transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="container  flex flex-col gap-2">
              <h1 className="text-white text-7xl hero-text text-right">
                Meet the big boy.
              </h1>
              <p className="text-right text-white pt-4">
                Get it on special now for only $7.95{" "}
                <span className="italic text-xs">(Ts & Cs apply)</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3  justify-end  ">
                <Link
                  to="/signup"
                  className="sm:text-xs font-bold hover:cursor-pointer mt-2 "
                >
                  <button className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6 w-[12rem] hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
                    get started
                  </button>
                </Link>
                <Link
                  to="/menu"
                  className="sm:text-xs font-bold hover:cursor-pointer mt-2"
                >
                  {" "}
                  <button className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6 w-[12rem] hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105">
                    view menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-5xl mx-auto flex pt-12  ">
          <div className="">
            <h2 className="text-8xl text-white header-font">Our locations</h2>
            <p>We&apos;re all over the place.</p>
          </div>
          <img src={earth} alt="earth" className="w-64" />
        </div>
      </div>
    </div>
  );
}
