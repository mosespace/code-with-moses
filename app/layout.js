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
          <div className='flex flex-grow h-screen w-screen overflow-x-hidden'>
            <div className='flex w-full'>
              <div className=''>
                <SideBar />
              </div>
              <div className='pt-[4.5rem] lg:ml-[20%] flex-grow w-full min-h-full'>
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </body>
      </SideBarProvider>
    </html>
  );
}
