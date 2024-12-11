'use client'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { useEffect } from "react";
import { useDax } from "~/app/context/dax-context";


interface ToggleIconProps {
    isMenuVisible: boolean;
    menu: boolean; 
    handleToggleOverlay:()=>void;
    menuRef: React.RefObject<HTMLElement>;
    toggleMenuPopup: () => void;
  }
  export  const ToggleIcon:React.FC<ToggleIconProps> = ({
    isMenuVisible,
    toggleMenuPopup,
    handleToggleOverlay
  }) =>
  {
    
  const {isOverlayOpen, setIsOverlayOpen}= useDax();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 760);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent rendering until `isLargeScreen` has been determined
  if (isLargeScreen === null) {
    return null;
  }
    return(
    <div onClick={isLargeScreen? toggleMenuPopup: handleToggleOverlay} className={`relative z-[120]   flex items-center jusify-center  dxs:scale-[0.60]   ${isOverlayOpen || isMenuVisible? '':"bg-[#635b5469]"} `}>
    <Hamburger toggled={isLargeScreen?isMenuVisible: isOverlayOpen} duration={0.6}color="#efeae8" size={30}   />
    </div>
    )}
    
  