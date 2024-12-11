
import Image from 'next/image';
import vine from '~/public/assets/images/vine.svg'
import chain from '~/public/assets/images/chain.svg'
const WorksLanding = () => {
    return (<section className="w-full h-screen flex items-center justify-center bg-beige relative" >
         <div className="absolute  bottom-0  left-0 w-[100%]  overflow-hidden flex items-end h-full dxs:w-full pointer-events-none" >
        <Image src={chain} alt='' className=" min-h-full h-full       opacity-20  w-full  object-cover "/>
        </div>
        {/* <div className="absolute  bottom-0  right-0 w-[50%]  overflow-hidden flex items-end -scale-x-100 rotate-[270deg] h-full dxs:hidden pointer-events-none " >
        <Image src={vine} alt='' className=" min-h-full h-full        opacity-20  w-full   "/>
        </div> */}
        
<div className="flex flex-col  text-center gap-5">
<h1 className="text-9xl rust-animated macho  ">
    /works
</h1>

<p className="text-base mulish text-mustard ">
*These are all sites I worked on myself, not owned by<br/> any company or organization.
</p>
</div>
    </section>  );
}
 
export default WorksLanding;