import React from "react";
import Image from "next/image";
const Card = (prop) => {
  let card_image = prop.post.thumbnail;
  return (
    <div className="w-[400px] h-[400px] shadow-lg flex flex-col align-middle justify-center items-center">
      <Image src={card_image} alt={prop.title} width={300} height={400} />
      <span>{prop.post.title}</span>
      <span className="bg-green-500 rounded p-1 text-white">
        {prop.post.rating}
      </span>
      <span> {prop.post.price} $</span>
    </div>
  );
};

export default Card;
