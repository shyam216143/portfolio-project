"use client";
import React, { createContext, useContext, useEffect, useState } from 'react'

type  Theme = "light" | "dark"
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | null>(null);
type ThemeContextProviderProps = {
    children: React.ReactNode;
}
export default function ThemeContextProvider({children}:ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if(theme ==="light"){
            setTheme("dark");
            localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        }
        else{
            setTheme("light");
            localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");
        }
    }
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if(savedTheme){
            setTheme(savedTheme);
            if(savedTheme ==="dark"){
                document.documentElement.classList.add("dark");
            }
        } else if(matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
     }, [])
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
      throw new Error("useTheme must be used within an ThemeContext")
    }
    return context;
  }