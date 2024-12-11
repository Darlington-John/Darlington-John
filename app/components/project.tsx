"use client"
import Image from "next/image";
import Link from "next/link";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./buttons";
const Project = (props: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const float = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s"
      }
    return (   <div className="w-full  px-20 flex flex-col gap-8 xl:px-4" style={float}  ref={ref} >
        <div className="flex flex-col gap-2 items-center  xs:items-start">
    <Link href={props.link} className="text-center  text-white text-3xl sm:text-xl xs:text-start">{props.project}</Link>
    <p className="text-base text-white w-[600px] text-center font-[family-name:var(--font-mulish-semibold)]  sm:text-sm sm:w-full xs:text-start">{props.decription}</p>

        </div>
    <Link href={props.link} className="h-auto ">
        {props.image && (

    <Image className="w-full  h-[600px] object-cover  rounded-xl object-top   xl:h-auto xs:rounded-sm" src={props.src} alt=""/>
        )}
{props.video && (
    <video src={props.src}   className="w-full  h-[600px] object-cover  rounded-xl object-top  xl:h-auto xs:rounded-sm "  autoPlay muted loop/>
)}
    </Link>
    <div className="flex gap-2 items-center mx-auto">
<Button to={props.link}   mustard action="Demo"/>
<Button to={props.gitLink}   classic  action="Git Repo"/>
    </div>
    </div>);
}
 
export default Project;