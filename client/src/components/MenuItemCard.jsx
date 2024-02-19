import { CartContext } from "../CartContext";
import { useContext } from "react";

export default function MenuItemCard({ item, addToCart }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(item._id);
  console.log(cart.items);

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

        <button
          className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80  w-full hover:text-red-500 "
          onClick={() => cart.addOneToCart(item._id)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
