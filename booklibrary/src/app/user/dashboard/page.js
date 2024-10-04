"use client";
import Login from "@/app/(auth)/login/page";
import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "@/lib/services/authSlice";

// import Main from "../../../components/Main";

const Dashboard = () => {
  const [user, setUser] = useState();
  const { data, isSuccess } = useGetUserQuery();

  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);

  return (
    <div className="h-full mt-[80px]">
      <div className="min-w-screen min-h-screen flex flex-col">
        <div className="flex flex-row align-middle justify-center gap-5">
          <span>Name: {user?.name}</span>
          <span>Email: {user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
