import React from "react";

const NotFound = () => {
  return (
    <div className="h-[100vh] w-full flex  align-middle justify-center items-center">
      <div className="flex  align-middle justify-center">
        <h1 className="texr-5xl sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-violet-500">
          <span className="text-red-400 border-2 rounded-full p-5 m-4 border-red-400">
            {"404  "}
          </span>
          Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
