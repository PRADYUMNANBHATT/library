"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardTwo = (prop) => {
  const reouterre = useRouter();

  const handleRedirect = (id) => {
    reouterre.push("/page-view/" + id);
    console.log(id);
  };
  return (
    <div
      key={prop.item.it}
      className=" border-2 border-gray-700 p-5 shadow-lg cursor-pointer "
      onClick={() => handleRedirect(prop.item.id)}
    >
      <h1 className=" text-blue-400 capitalize">{prop.item.title}</h1>
      <p className=" text-slate-500 ">{prop.item.body}</p>
    </div>
  );
};

export default CardTwo;
