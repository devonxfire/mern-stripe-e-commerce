import React, { useEffect, useState } from "react";
import MenuItemCard from "../components/MenuItemCard";
import { useDispatch } from "react-redux";
import { addToCartSuccess } from "../redux/cart/cartSlice";

export default function MenuPage() {
  const dispatch = useDispatch();
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
    dispatch(addToCartSuccess(item));
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu/all");
        const data = await response.json();

        if (response.ok) {
          setAllMenuItems(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen ">
      <div className="flex flex-col sm:flex-row gap-4 pt-8 max-w-5xl mx-auto">
        {allMenuItems
          ? allMenuItems.map((item) => (
              <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
            ))
          : null}
      </div>
      <div className="text-white text-center">
        <h2>Cart Items</h2>
        <ul>
          {cart.map((item) => (
            <div key={item.id}>
              <li>{item.name}</li>
              <li>{item.price}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
