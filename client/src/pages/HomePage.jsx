import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950">
      <div className="min-h-screen">
        <div className="container max-w-5xl mx-auto ">
          <h1 className="text-white text-8xl hero-text">It is wow wow time.</h1>
        </div>

        <div className="flex flex-col sm:flex-row max-w-5xl mx-auto ">
          <Link
            to="/signup"
            className="sm:text-xs font-bold hover:cursor-pointer mt-2"
          >
            <button className="uppercase font-bold p-3 bg-transparent border hover:opacity-80 text-white  text-xs sm:text-sm w-full self-center transition duration-300 ease-in-out transform hover:scale-105">
              get started
            </button>
          </Link>
          <Link
            to="/menu"
            className="sm:text-xs font-bold hover:cursor-pointer mt-2"
          >
            {" "}
            <button className="uppercase font-bold p-3 bg-slate-800 hover:opacity-80 text-white  text-xs sm:text-sm w-full self-center transition duration-300 ease-in-out transform hover:scale-105 sm:ml-4">
              view menu
            </button>
          </Link>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto">
        <div>
          <h2 className="text-8xl text-white header-font">Our locations</h2>
          <p>Cape Town</p>
          <p>Cape Town</p>
        </div>
      </div>
    </div>
  );
}
