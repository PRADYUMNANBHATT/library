import { Inter, Varela } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import { LoadingComponent } from "@/components/LoadingComponent";
import Loading from "./loading";
// const inter = Inter({ subsets: ["latin"] });
const varela = Varela({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "BookLibrary",
  description: "Where World come to read!",
};

export default function RootLayout({ children }) {
  // const pathname = usePathname();

  // const Footer = (
  //   <footer>
  //     <div
  //       className={
  //         "w-full flex align-middle justify-center min-h-[60px] border-t-2 border-slate-100 bg-white " +
  //         varela.className
  //       }
  //     >
  //       Copy-Rights &copy;2022
  //     </div>
  //   </footer>
  // );

  return (
    <html lang="en">
      <body className="w-full min-h-screen mx-auto">
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback="<div>loading...</div>">
            <StoreProvider>
              <NavBar />
              {children}
              {/* {Footer} */}
              <Footer />
            </StoreProvider>
          </ErrorBoundary>
        </Suspense>
      </body>
    </html>
  );
}
