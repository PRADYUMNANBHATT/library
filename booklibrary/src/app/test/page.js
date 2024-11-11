import React from "react";
import CardTwo from "../../components/Cardtwo";
import { getPostdata } from "@/lib/functions/fetchFunctions";
// import { useEffect } from "react";

export default async function Test() {
  const data = await getPostdata();

  if (!data) return <div>loading...</div>;

  return (
    <div className="flex flex-col pr-[10vw] pl-[10vw] pt-[100px] pb-[10vh] gap-3 ">
      {data.map((item) => {
        return (
          <CardTwo item={item} key={item.id} className="cursor-pointer " />
        );
      })}
    </div>
  );
}
