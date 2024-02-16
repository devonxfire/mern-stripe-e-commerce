import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import burger from "../assets/burger.png";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
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
          <ul className="flex gap-6 text-slate-600 items-center ">
            <Link to={"/"}>
              <li className="hover:text-red-600">Home</li>
            </Link>
            <Link to={"/menu"}>
              <li className="hover:text-red-600">Menu</li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:text-red-600">About</li>
            </Link>

            {!currentUser && (
              <Link to={"/signin"}>
                <li className="hover:text-red-600">Sign in</li>
              </Link>
            )}

            <Link
              to={"/mycart"}
              className="flex gap-2 items-center hover:text-red-600"
            >
              <FaShoppingCart />
              <li className="">My Cart</li>
            </Link>

            {currentUser && (
              <Link to="/profile" className="flex items-center">
                <li className="hover:text-red-600">My Profile</li>
                <img
                  src={currentUser.image}
                  alt="user-image"
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            )}
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
