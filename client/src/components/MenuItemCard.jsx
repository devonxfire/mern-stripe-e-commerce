import { Link } from "react-router-dom";

export default function MenuItemCard({ item }) {
  return (
    <div className="flex justify-center  ">
      <div className="  bg-white rounded-lg px-4  flex flex-col gap-2 w-64 flex-1 pb-4">
        <img
          src={item.imageUrl}
          alt="item-pic"
          className="w-64 h-64 object-contain border-b "
        />

        <h2 className="uppercase text-lg font-bold text-red-600">
          {item.name}
        </h2>
        <div className="flex flex-grow">
          {" "}
          <p>{item.description}</p>
        </div>
        <p className="text-red-600">${item.price}</p>
        <p>{item.onSpecial}</p>
        <Link
          to="/"
          className="sm:text-xs font-bold hover:cursor-pointer mt-2 "
        >
          <button className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80  w-full hover:text-red-500 ">
            add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
