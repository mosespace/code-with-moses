import "../Styles/globals.css";
import { Raleway } from "next/font/google";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import SideBar from "../components/SideBar";
import { SideBarProvider } from "../Context/Context";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "CodeWithMoses",
  description: "Created By Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <SideBarProvider>
        <body className={raleway.className}>
          <NavBar />
          <div className='flex h-screen w-screen overflow-x-hidden'>
            <div className='flex w-full'>
              <div className=''>
                <SideBar />
              </div>
              <div className='bg-slate-50 pt-[4.5rem] lg:ml-[20%] w-full'>
                {children}
                <div className='bg-white absolute right-0 left-0 bottom-0 ml-[20%]'>
                  {/* <Footer /> */}
                </div>
              </div>
            </div>
          </div>
        </body>
      </SideBarProvider>
    </html>
  );
}
