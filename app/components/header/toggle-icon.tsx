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
  const [isLargeScreen, setIsLargeScreen] = useState(window?.innerWidth > 760);
  useEffect(() => {
     const handleResize = () => {
        setIsLargeScreen(window?.innerWidth > 500);
     };

     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, []);
    return(
    <div onClick={isLargeScreen? toggleMenuPopup: handleToggleOverlay} className="relative z-20">
      <div className="nav    w-[70px]  h-[43px]  lg:w-[50px]  lg:h-[23px]">
      <input type="checkbox" checked={isLargeScreen?isMenuVisible: isOverlayOpen} />
      <svg className="max-h-[50px]">
        <use xlinkHref="#menu"  />
        <use xlinkHref="#menu" />
      </svg>
    </div>
    
    
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
        <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
      </symbol>
    </svg>
    </div>
    )}
    
  