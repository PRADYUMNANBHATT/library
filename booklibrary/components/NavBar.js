"use client";
import { Varela } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLogoutUserMutation } from "@/lib/services/authSlice";
import { useRouter } from "next/navigation";
import logo from "@/public/vercel.svg";

const varela = Varela({ subsets: ["latin"], weight: ["400"] });
export const NavBar = () => {
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const authCookie = Cookies.get("is_auth");
    setIsAuth(authCookie);
  });
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  const handleLogout = async () => {
    try {
      const responce = await logoutUser();
      if (responce.data && responce.data.status === "success") {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav
      className={
        "min-w-screen flex flex-row bg-transparent fixed  items-center  shadow-lg  " +
        varela.className
      }
    >
      <div className=" flex-row bg-transparent w-full  justify-evenly align-middle  ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="logo"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
      <div className="flex w-full justify-end menu-h ">
        <div>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </div>

        <div>
          {isAuth ? (
            <div className="flex flex-row">
              <Link
                className={`link ${
                  pathname === "user/dashboard" ? "active" : ""
                }`}
                href="/user/dashboard"
              >
                Dashboard
              </Link>
              <div onClick={handleLogout}>
                <svg
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  className="logout"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <button className="pr-3  shadow-md shadow-slate-500 pl-3 border-2 hover:border-white hover:bg-violet-500 hover:text-white hover:pr-5 hover:pl-5 transition-all  rounded-lg border-white">
                <Link href={"/login"}> Login</Link>
              </button>
              <button className="pr-3 shadow-md signup shadow-slate-500 pl-3 border-2 border-white bg-violet-500 text-white hover:pr-5 hover:text-black hover:bg-white hover:pl-5 transition-all rounded-lg">
                <Link href={"/signup"}> Signup</Link>
              </button>
            </div>
          )}
        </div>
      </div>

      {menu ? (
        <div
          className="flex flex-row w-full  justify-evenly align-middle items-center gap-5 menu"
          onClick={handleMenu}
        >
          <div className="flex flex-row align-middle justify-end w-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="nill"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 menu-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-row w-full  justify-evenly align-middle items-center gap-5">
            <li>
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <Link
              className={`link ${pathname === "/dashboard" ? "active" : ""}`}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </ul>

          <button className="mt-2 pt-1 pb-1 pr-3  shadow-md shadow-slate-500 pl-3 border-2 hover:border-white hover:bg-violet-500 hover:text-white hover:pr-5 hover:pl-5 transition-all  rounded border-white">
            <Link href={"/login"}> Login</Link>
          </button>
          <button className="mt-2 pt-1 pb-1 pr-3 shadow-md shadow-slate-500 pl-3 border-2 hover:border-white hover:bg-violet-500 hover:text-white hover:pr-5 hover:pl-5 transition-all  rounded border-slate-600">
            <Link href={"/signup"}> Signup</Link>
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-row items-center justify-center align-middle gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="nill"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" menu-svg "
          onClick={handleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </nav>
  );
};
