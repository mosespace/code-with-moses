"use client";
import { createContext, useContext, useState } from "react";

//1) Creating the context----------------------------------------------------------------
export const appContext = createContext();

//2) Creating the provider----------------------------------------------------------------
export function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(true);
  }
  function handleCloseToggle() {
    setIsOpen(false);
  }

  return (
    <appContext.Provider value={{ handleToggle, handleCloseToggle, isOpen }}>
      {children}
    </appContext.Provider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------
export function useSideBar() {
  // use the useContext hook to access the context data
  const context = useContext(appContext);
  return context;
}
