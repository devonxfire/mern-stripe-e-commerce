import React, { useEffect, useState } from "react";
import MenuItemCard from "../components/MenuItemCard";

export default function MenuPage() {
  const [allMenuItems, setAllMenuItems] = useState([]);
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
              <MenuItemCard key={item.id} item={item} />
            ))
          : null}
      </div>
    </div>
  );
}
