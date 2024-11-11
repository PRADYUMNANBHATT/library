"use server";
import { getComments } from "@/lib/functions/fetchFunctions";
import Image from "next/image";
import React from "react";
import profilepic from "@/public/profile.png";

export default async function CommentCard(prop) {
  const data = await getComments(prop.item);
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div className="bg-gray-400 mb-2">
        {data.map((dat) => {
          return (
            <div
              key={dat.id}
              className="left-[15vw] border-2 border-gray-700 p-3 shadow-md mb-2 cursor-pointer"
            >
              <div className="border-2 border-red-900 ">
                <div className="flex flex-row gap-3">
                  <Image
                    src={profilepic}
                    alt="profile_pic"
                    width={40}
                    height={40}
                  />
                  <span className="capitalize font-bold text-[13px] text-blue-500">
                    {dat.name}
                  </span>
                </div>

                <p className="capitalize text-red-500">{dat.email}</p>
              </div>
              <p className="text-slate-500 ">{dat.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// export default PageViewCard;
