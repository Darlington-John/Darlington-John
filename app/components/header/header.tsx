"use client"
import Link from "next/link";
import { useCallback, useContext, useEffect,  useState } from "react";
import { useDax } from "~/app/context/dax-context";
import { usePopup } from "~/utils/toggle-popups";
import { ToggleIcon } from "./toggle-icon";
import Menu from "./menu";
import { usePathname } from "next/navigation";

const Header = () => {
  const {isOverlayOpen, setIsOverlayOpen}= useDax();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScrollBeyond = () => {
      const scrollTop = window.scrollY;  
      const scrollThreshold = 500;  
  
      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScrollBeyond);
  
      
      return () => {
        window.removeEventListener('scroll', handleScrollBeyond);
      };
    }, []);
    const handleScroll = useCallback(() => {
      setLastScrollY((prevLastScrollY) => {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > prevLastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
    
        return currentScrollY; 
      });
    }, []);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY, handleScroll]);
  
    const elementStyle = {
      transition: 'all 0.5s',
      opacity: isVisible ? 1 : 0,
      transform:  isVisible ? 'translateY(0)' : 'translateY(-50px)'
    };

    const {
      isVisible: isMenuVisible,
      isActive: menu,
      ref: menuRef,
      togglePopup: toggleMenuPopup,
   } = usePopup();

   const linkname = usePathname();
   useEffect(() => {
    const overlayElement = document.getElementById('myOverlay');
    if (!overlayElement) {
       return;
    }
    overlayElement.style.width = '0%';
    setIsOverlayOpen(false);
 }, [linkname, setIsOverlayOpen]);
 const handleToggleOverlay = () => {
    toggleOverlay();
    setIsOverlayOpen(!isOverlayOpen);
 };
 const svgProps={isMenuVisible, menu, menuRef, toggleMenuPopup, handleToggleOverlay}
 const menuProps={menu, isMenuVisible, menuRef};
    return ( <div className="b  w-full py-16  px-20 flex items-center justify-between  fixed top-0 left-0 lg:py-8  z-[100]  lg:px-8  dxs:py-3 dxs:px-4      "style={elementStyle} >
<div className="flex gap-2 items-center md:gap-1  ">
<h1 className="  text-darkBrown  text-4xl rust-animated macho lg:text-2xl  ">darlington</h1>


</div>
<div className="relative ">
<ToggleIcon {...svgProps}/>
<Menu {...menuProps}/>
</div>
    </div> );
}
 
export default Header;


export const toggleOverlay = () => {
    const overlayElement = document.getElementById('myOverlay');
    if (!overlayElement) {
       return;
    }
 
    if (overlayElement.style.width === '100%') {
       overlayElement.style.width = '0%';
    } else {
       overlayElement.style.width = '100%';
    }
 };