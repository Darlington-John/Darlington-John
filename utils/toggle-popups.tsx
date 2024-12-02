'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
export interface PopupState {
    isVisible: boolean;
    isActive: boolean;
    ref: React.RefObject<any>;
    togglePopup: () => void;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export const usePopup = (): PopupState => {
   const [isVisible, setIsVisible] = useState(false);
   const [isActive, setIsActive] = useState(false);
   const ref = useRef<any>(null);

   const togglePopup = useCallback(() => {
      if (!isActive) {
         setIsActive(true);
         setIsVisible(true);
      } else {
         setIsVisible(false);
         setTimeout(() => setIsActive(false), 500);
      }
   }, [isActive]);
   const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
         setIsVisible(false);
         setTimeout(() => setIsActive(false), 500);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return {
      isVisible,
      isActive,
      ref,
      togglePopup,
      setIsVisible,
      setIsActive,
   };
};
