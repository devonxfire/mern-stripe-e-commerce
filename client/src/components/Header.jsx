import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import burger from "../assets/burger.png";

export default function Header() {
  return (
    <header className="pb-8">
      <div className="max-w-5xl  mx-auto py-6 flex items-end justify-between px-4 border-b">
        <Link
          to="/"
          className="flex items-center text-md sm:text-lg md:text-3xl "
        >
          <div className="flex items-end gap-2">
            <img src={burger} alt="" className="w-24" />
            <h1 className="text-xl sm:text-3xl lg:text-4xl flex cursor-pointer logo font-extrabold">
              <span
                className="
                text-red-700 font-semibold uppercase "
              >
                Bangin'
              </span>
              <span className="text-slate-900 uppercase font-extralight">
                Burgers
              </span>
            </h1>
          </div>
        </Link>
        <nav>
          <ul className="flex gap-6 text-slate-800  ">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/menu"}>
              <li>Menu</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/signin"}>
              <li>Sign in</li>
            </Link>
            <Link to={"/mycart"} className="flex gap-2 items-center">
              <FaShoppingCart />
              <li>My Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="text-center">
        <p className="text-2xl text-slate-400 pt-8 quote">
          'Big is beautiful.'
        </p>
      </div>
    </header>
  );
}
