import "../Styles/globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeWithMoses",
  description: "Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <div className='flex w-full h-full'>
          <div className='h-screen flex w-full'>
            <SideBar />
            <div className='w-[80%] pt-20'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
