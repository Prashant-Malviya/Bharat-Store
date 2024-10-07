import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);

  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          consequuntur velit nihil consequatur pariatur in quae tempore
          cupiditate ea a.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSellers.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image[0]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
