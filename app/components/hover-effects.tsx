"use client"
import {  useDax } from "../context/dax-context";
import Image from "next/image";
import me from './../../public/assets/images/me.png'

const Hover = () => {
    const{hoverItems} = useDax();
    return ( 
        <>
        {hoverItems.map((item: any) => (
    <div className="flex  fixed  z-[1000] pointer-events-none"
    style={{ top: item.y , left: item.x }}  key={item.id}
    >
<Image src={me} alt="" className=" spread-up w-5"/>
<Image src={me} alt="" className=" spread-left w-5"/>
<Image src={me} alt="" className=" spread-right w-5"/>
    </div>
    ))}
    </>
      );
}
 
export default Hover;