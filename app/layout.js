import "../Styles/globals.css";
import { Raleway } from "next/font/google";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "CodeWithMoses",
  description: "Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <NavBar />
        <div className='flex h-screen w-screen overflow-x-hidden'>
          <div className='flex w-full'>
            <div className='fixed top-0 bottom-0 left-0 overflow-y-auto no-scrollbar right-0 pt-20 w-[20%] border-r border-slate-300 bg-white py-[1.1rem] px-5 text-black'>
              <SideBar />
            </div>
            <div className='px-8 bg-slate-50 pt-20 ml-[20%] w-full'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
