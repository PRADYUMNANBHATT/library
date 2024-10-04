"use server";
import { getdataById } from "@/lib/functions/fetchFunctions";
import React from "react";

export default async function PageViewCard(prop) {
  const data = await getdataById(prop.item);

  if (!data) return <div>loading...</div>;
  return (
    <div
      key={data.id}
      className=" border-2 border-gray-700 p-5 shadow-lg cursor-pointer "
    >
      <h1 className=" text-blue-400 capitalize">{data.title}</h1>
      <p className=" text-slate-500 ">{data.body}</p>
    </div>
  );
}

// export default PageViewCard;
