'use client'
import Image from "next/image";
import me from './../../public/assets/images/meFull.png'
import { useEffect, useState } from "react";
import Button from "../components/buttons";
const About = () => {
    const texts = ["Frontend Dev", "MERN Stack dev", "Love designs with complex animations", "I enjoy writing codes"];

    
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
    return (       <section className="bg-darkBlue flex gap-4 items-center justify-between  h-screen text-blue w-full  px-60  2xl:px-28   lg:px-8  md:py-10  md:px-4  lg:flex-col     sm:py-20 lg:h-auto  "> 
        <div className="flex flex-col items-start gap-8  sm:gap-6   lg:self-start">
            <div>
        <h1 className="text-5xl text-white 2xl:text-4xl lg:text-3xl xs:text-2xl ">About me</h1>
        <h1 className={`  transition duration-300 ease text-3xl 2xl:text-2xl lg:text-xl sm:text-base    ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {texts[currentIndex]}
        </h1>
        </div>
        <div className="flex flex-col gap-2 w-[600px]  font-[family-name:var(--font-mulish-semibold)] sm:w-full ">
        <p className="text-sm   text-white 2xl:text-xs    font-normal">
My name is John Darlington, The unstoppable force in the world of web development! With the precision of a master coder and the creativity of an artist, I  weave complex algorithms and sleek designs into seamless digital experiences. I`m  the guy who bends JavaScript to his will, tames the wildest APIs, an...  Haha too cheeky!
        </p>
        <p className="text-base   text-white 2xl:text-sm  ">
        My name is John Darlington, I{`'`}m a frontend web developer, with a passion to learn more and gain confidence admist other devs out there. I love creating sites with complex animations, I enjoy writing codes and gaining more knowledge cause apparently there{`'`}s always more to learn... I{`'`}m an introvert and i love watching animes -did{`'`}nt know what else to add...</p>
        </div>
        <div className="flex gap-4 items-center  sm:justify-center">
            
        <Button grey to="/" action="Hire me"/>
        <Button blue to="/" action="My Resume"/>
        </div>
        </div>
        <div className="h-[350px] w-[350px]   rounded-full   ring-8 ring-dimBlue overflow-hidden 2xl:h-[300px]  2xl:w-[300px] lg:h-[250px] lg:w-[250px] md:w-48 md:h-48    sm:h-40 sm:w-40 xs:h-32 xs:w-32 lg:self-end">
        <Image src={me} alt="" priority/>
        </div>
            </section> );
}
 
export default About;