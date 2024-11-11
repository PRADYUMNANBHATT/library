import logo from "@/public/logo.png";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="max-w-[100vw] bg-indigo-500">
      <div className="w-[100vw] flex flex-row justify-between align-middle p-10 gap-5 flex-wrap">
        <div className="">
          <Image
            src={logo}
            className="h-[48px] filter sepia"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="flex flox-col">
          <ul className="">
            <li className="font-semibold">Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-[300px]">
          <ul className="w-[100px]">
            <li className="font-semibold">Home</li>
            <li>Privaacy Policy</li>
            <li>Terms & contition</li>
            <li>Info</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex align-middle justify-center min-h-[60px] border-t-2 border-slate-100 bg-white ">
        Copy-Rights &copy;2022
      </div>
    </footer>
  );
};
