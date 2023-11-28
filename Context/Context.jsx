"use client";
import { createContext, useContext, useState } from "react";
import { SessionProvider } from "next-auth/react";

//1) Creating the context----------------------------------------------------------------
export const appContext = createContext();

//2) Creating the provider----------------------------------------------------------------
export function SideBarProvider({ children, session }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(true);
  }
  function handleCloseToggle() {
    setIsOpen(false);
  }

  return (
    <SessionProvider session={session}>
      <appContext.Provider value={{ handleToggle, handleCloseToggle, isOpen }}>
        {children}
      </appContext.Provider>
    </SessionProvider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------
export function useSideBar() {
  // use the useContext hook to access the context data
  const context = useContext(appContext);
  return context;
}
