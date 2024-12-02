"use client"
import Link from "next/link";
import { useCallback, useContext, useEffect,  useState } from "react";
import { usePopup } from "~/utils/toggle-popups";
import { useDax } from "../context/dax-context";
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
   const svgProps={isMenuVisible, menu, menuRef, toggleMenuPopup}
    return ( <div className="b  w-full py-16  px-20 flex items-center justify-between  fixed top-0 left-0 lg:py-8  z-[100]  lg:px-8  dxs:py-3 dxs:px-4      "style={elementStyle} >
<div className="flex gap-2 items-center md:gap-1  ">
<h1 className="  text-darkBrown  text-4xl rust-animated macho lg:text-2xl  ">darlington</h1>


</div>
<div className="relative ">
<ToggleIcon {...svgProps}/>
{menu && (
  <div className={`bg-mustard   duration-300 absolute  -top-5  -right-5  overflow-hidden     ${isMenuVisible? ' expand opacity-100':' expand-hidden  opacity-20'}`} ref={menuRef}>
<div className=" flex flex-col gap-10 py-16 px-12 lg:gap-5  lg:py-10 lg:px-6 ">
<div className="flex flex-col gap-5 mulish text-white text-nowrap lg:gap-2" >
<Link href={'/work'} className="text-[19px] lg:text-base ">
My Works
</Link>
<Link href={'/playlists'} className="text-[19px]  lg:text-base">
My Playlists
</Link>
<Link href={'/resume'} className="text-[19px]  lg:text-base">
My Résumé
</Link>
</div>
<div className="flex flex-col gap-5 mulish text-white lg:gap-2 " >
<h1  className="text-[19px] mulish-thin  text-[#ffffffa8]  lg:text-base">
Say Hello
</h1>
<Link href={'/playlists'} className="text-[19px]  lg:text-base">
onuohadarlington38@gmail.com
</Link>
<Link href={'/playlists'} className="text-[19px]  lg:text-base">
darlington
</Link>
</div>
<div className="flex   gap-8  mulish-thin  text-white" >
<h1  className="text-[19px]  lg:text-base">
FB
</h1>
<Link href={'/playlists'} className="text-[19px] lg:text-base">
LN
</Link>
<Link href={'/playlists'} className="text-[19px] lg:text-base">
GH
</Link>
<Link href={'/playlists'} className="text-[19px] lg:text-base">
YT
</Link>
</div>
</div>
  </div>
)}
</div>
    </div> );
}
 
export default Header;
interface ToggleIconProps {
  isMenuVisible: boolean;
  menu: boolean; 
  menuRef: React.RefObject<HTMLElement>;
  toggleMenuPopup: () => void;
}
const ToggleIcon:React.FC<ToggleIconProps> = ({
  isMenuVisible,
  menu,
  menuRef,
  toggleMenuPopup,
}) => (
<div onClick={toggleMenuPopup} className="relative z-20">
  <div className="nav    w-[70px]  h-[43px]  lg:w-[50px]  lg:h-[23px]">
  <input type="checkbox" checked={isMenuVisible} />
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
)
