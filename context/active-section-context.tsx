"use client";
import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'


type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastTimeClick: number;
  setLastTimeClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")
  const [lastTimeClick, setLastTimeClick] = useState(0);

  return (
    <ActiveSectionContext.Provider 
    value={{ activeSection, setActiveSection, lastTimeClick, setLastTimeClick   }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);
  if(!context){
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
  }
  return context;
}