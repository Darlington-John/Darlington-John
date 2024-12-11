import Image from "next/image";
import code from '~/public/assets/images/code.svg'
import design from '~/public/assets/images/design.svg'
import spiral from '~/public/assets/images/lines.svg'
import sparkles from '~/public/assets/images/sparkles.svg'
import vine from '~/public/assets/images/vine.svg'
const WhatIDo = () => {
    return ( <section className="flex items-center  bg-beige p-40 gap-10 relative overflow-hidden  2xl:px-20  lg:px-10 lg:py-20   md:px-4  md:gap-4  md:py-10  sm:flex-col  dxs:px-0">
        <div className="absolute  bottom-0  left-0 w-[50%]  overflow-hidden flex items-end h-full dxs:w-full" >
        <Image src={vine} alt='' className=" min-h-full h-full       opacity-20  w-full   "/>
        </div>
        <div className="absolute  bottom-0  right-0 w-[50%]  overflow-hidden flex items-end -scale-x-100 rotate-[270deg] h-full dxs:hidden " >
        <Image src={vine} alt='' className=" min-h-full h-full        opacity-20  w-full   "/>
        </div>
<div className="flex flex-col items-center justify-center flex-1   p-4 mb-32  relative lg:mb-24 gap-4  sm:mb-0 sm:gap-0 ">
<div className="flex flex-col relative  gap-4 md:gap-2 sm:order-2  ">
<h1 className="text-6xl rust  macho  xl:text-5xl  md:text-4xl  dxs:text-3xl   ">Engineering</h1>
<p className="mulish text-base leading-[26px]  text-greyBrown  lg:text-sm ">
In building JavaScript applications, I{`'`}m equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
</p>
</div>
<Image src={code} alt='' className="w-32 self-end h-20 object-cover overflow-hidden lg:w-16   lg:h-12 sm:w-8  sm:h-10"/>
<Image src={sparkles} alt='' className="w-20   object-cover overflow-hidden absolute bottom-0 left-0  grow  lg:w-16 sm:top-0  sm:bottom-auto"/>
</div>



<div className="flex flex-col items-center justify-center flex-1    p-4 mt-32 relative  lg:mt-24  gap-4 sm:mt-0 sm:gap-0  ">
<Image src={design} alt='' className="w-28 self-end h-34 object-cover overflow-hidden  lg:w-16  lg:h-18   sm:w-10 sm:h-12 "/>
<Image src={spiral} alt='' className="w-20 self-end  object-cover overflow-hidden absolute  spin top-0 left-0  lg:w-12  "/>
<div className="flex flex-col relative  gap-4 md:gap-2 ">
<h1 className="text-6xl rust  macho 2xl:text-5xl  md:text-4xl dxs:text-3xl  ">Design</h1>
<p className="mulish text-base leading-[26px]  text-greyBrown  lg:text-sm">
I{`'`}m probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you{`'`}ll find me (~_^). I{`'`}m committed to creating fluent user experiences while staying fashionable.
</p>
</div>
</div>
    </section> );
}
 
export default WhatIDo;