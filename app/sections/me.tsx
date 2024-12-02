'use client'
import Image from "next/image";
import me from '~/public/assets/images/black.jpg'
import { useEffect, useState } from "react";
import Button from "../components/buttons";
import disk from '~/public/assets/images/cd.svg'
import record from '~/public/assets/images/record.gif'
import net from '~/public/assets/images/net.svg'
import old from '~/public/assets/images/oldschool.png'
import draw from '~/public/assets/images/draw.svg'
import step from '~/public/assets/images/step.svg'
const Darlington = () => {
    const texts = ["Frontend Dev", "MERN Stack dev", "Love designs with animations", "I enjoy writing codes"];

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const [fade, setFade] = useState(true);
 
    useEffect(() => {
      const interval = setInterval(() => {
        
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setFade(true); 
        }, 500); 
      }, 3000); 
  
      return () => clearInterval(interval);
    }, [texts.length]);
    return (
       <section className=" flex gap-4 items-center justify-between  h-screen  w-full       sm:flex-col sm:items-center  sm:h-auto  sm:py-20 bg-[#efeae8] relative overflow-hidden sm:gap-8   dxs:pb-32"  > 
        <div className="   absolute    left-0  top-40 overflow-hidden  lg:top-20 sm:right-10  sm:left-auto sm:z-30 dxs:opacity-20  dxs:top-32">
  <Image src={record} alt="" className="  object-cover     w-[140px]   lg:w-[100px]  "/>
  
  </div>
  <Image src={old} alt="" priority className="w-[250px]    object-cover   absolute bottom-0  z-20 bg-beige    lg:w-[200px] sm:left-0 sm:w-[180px] dxs:w-[160px]"/>
       <div className="draw   overflow-hidden absolute top-0 pointer-events-none z-10 sm:hidden ">
       <Image src={draw} className="min-h-screen  " alt=""/>
       </div>
      <div style={{
        backgroundImage: `url(/assets/images/noise.gif)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat',
        pointerEvents: 'none'
      }}  className="w-full h-full  fixed top-0  opacity-[0.08]  z-[100] ">

      </div>
<div className="flex flex-col items-start gap-8  lg:gap-4    bg-[#efeae8] flex-1 pl-48  shrink-0  4xl:pl-72  lg:pl-10   lg:relative lg:z-20 sm:px-4 sm:w-full  sm:pr-48 dxs:pr-4   ">
    <div>
<h1 className="text-5xl text-grey  2xl:text-4xl lg:text-3xl xs:text-2xl  text-darkBrown  rust macho lg:text-[26px]  dxs:leading-none">Hello, Darlington here<span className="text-6xl  lg:text-3xl">.</span></h1>
<h1 className={`  transition duration-300 ease text-3xl 2xl:text-2xl lg:text-xl sm:text-base    text-greyBrown   ${fade ? 'opacity-100' : 'opacity-0'}`}>
{texts[currentIndex]}
</h1>
</div>
<p className="text-base   font-[family-name:var(--font-mulish-semibold)] text-greyBrown    2xl:text-sm  ">
Junior Frontend Web Developer | HTML, Css, TailwindCSS, Reactjs, TypeScript, <br className="sm:hidden"/>  Javascript MERN stack, Remix, Nextjs, MongoDB, Xata, Cloudinary.
</p>
<div className="flex gap-4 items-center  sm:justify-center">
    
<Button grey to="/" action="Hire me"/>
<Button blue to="/" action="My Résumé"/>
</div>
</div>
<div className="        h-full    flex-1 intro  items-center justify-center flex shrink-0 relative sm:items-end  sm:justify-end sm:w-full sm:px-4 " >
  <Image src={net} alt="" className="w-[450px]  h-[450px]  object-cover  absolute  spin lg:h-auto   "/>
  <div className="w-[140px]  h-[120px] spin-fast  absolute    -left-20  bottom-20 overflow-hidden lg:w-[100px]  lg:h-[80px] lg:bottom-10 sm:left-44  sm:top-10 dxs:left-2 dxs:top-10 ">
  <Image src={disk} alt="" className="  object-cover     w-[140px]  h-[140px] lg:w-[100px]  lg:h-[90px] "/>
  
  </div>
  
  <div className="bg-[#635b54] relative z-10    overflow-hidden rounded-md">
<Image src={me} alt="" priority className="w-[390px]  h-[390px]  object-cover  opacity-[0.7]  lg:w-[230px]  lg:h-[230px] "/>
</div>
<div className="w-[140px]  h-[120px]  absolute    right-20  bottom-10 overflow-hidden float lg:h-auto lg:w-[100px] lg:right-6 sm:hidden">
  <Image src={step} alt="" className="  object-cover     w-[140px]  h-[140px]  lg:h-auto lg:w-[100px] "/>
  
  </div>
</div>
    </section> );
}
 
export default Darlington;