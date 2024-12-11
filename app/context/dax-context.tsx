'use client';
import React, { createContext, useEffect, useRef, useState,  MouseEvent, useMemo, useCallback, useContext } from 'react';
interface HoverItem {
  id: string;
  x: number;
  y: number;
  timeoutId: number | null;
}
interface TimeoutRef {
  current: number;
}
const DaxContext = createContext<any>(null);
export const DaxProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [isOverlayOpen, setIsOverlayOpen] = useState(false);
   const [hoverItems, setHoverItems] = useState<HoverItem[]>([]);
   const timeoutRefs = useRef<TimeoutRef[]>([]);
 
   const createNewHoverItem = (id: string, x: number, y: number): HoverItem => {
     return { id, x, y, timeoutId: null };
   };
   
   const removeHoverItem = (id: string) => {
     setHoverItems((prevItems) => prevItems.filter((item) => item.id !== id));
   };
   
   const clearTimeoutRef = (timeoutId: number) => {
     timeoutRefs.current = timeoutRefs.current.filter((ref) => ref.current !== timeoutId);
   };
   const handleMouseEnter =useCallback((e: MouseEvent)=>{ const id = `hover-item-${Date.now()}-${Math.random()}`;
   const { clientX: x, clientY: y } = e;
 
   const newItem = createNewHoverItem(id, x, y);
   setHoverItems((prevItems) => [...prevItems, newItem]);
 
   const timeoutId = window.setTimeout(() => {
     removeHoverItem(id);
     clearTimeoutRef(timeoutId);
   }, 500);
 
   timeoutRefs.current.push({ current: timeoutId });}, [])
   
 
   useEffect(() => {
     return () => {
       timeoutRefs.current.forEach((ref) => clearTimeout(ref.current));
       timeoutRefs.current = [];
     };
   }, []);

   const providerValue = useMemo(
      () => ({
         isOverlayOpen,
         setIsOverlayOpen,
         handleMouseEnter, hoverItems
      }),
      [
         isOverlayOpen,
         setIsOverlayOpen,
         handleMouseEnter, hoverItems
      ]
   );

   return (
      <DaxContext.Provider value={providerValue}>
         {children}
      </DaxContext.Provider>
   );
};

export const useDax = () => useContext(DaxContext);
