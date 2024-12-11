import Link from "next/link";

const Overlay = () => {
    const worksLink=[
        {
            id:1,
            href: '/works',
            to: "My Works"
        },
        {
            id:2,
            href: '/playlist',
            to: "My Playlists"
        },
        {
            id:3,
            href: '/resume',
            to: " My Résumé"
        },
    ]
    const mediaLink=[
        {
            id:1,
            href: '/fb',
            to: "FB"
        },
        {
            id:2,
            href: '/playlist',
            to: "LN"
        },
        {
            id:3,
            href: '/resume',
            to: " GH"
        },
        {
            id:4,
            href: '/resume',
            to: " YT"
        },
    ]

    return (  
        <div
        className={`hidden  fixed  z-40 top-o  left-0   ease-out duration-[0.2s]    overflow-hidden  h-full    dxs:flex   items-start backdrop-brightness-[.6]  w-[0px]`}
        id="myOverlay"
     >
        <div className="flex flex-col bg-white h-full  relative w-full" >
        <div className={`bg-mustard   duration-300 overflow-hidden h-full       `}>
          <div className=" flex flex-col gap-16  py-16 px-12       lg:py-20 lg:px-12 ">
          <div className="flex flex-col gap-10     mulish text-white text-nowrap lg:gap-6" >
            {worksLink.map((data)=>(
  <Link href={data.href} className="text-[19px] lg:text-[19px] " key={data.id}>
  {data.to}
  </Link>
            ))}
          </div>
          <div className="flex flex-col gap-6     mulish text-white  " >
          <h1  className="text-[19px] mulish-thin  text-[#ffffffa8]  lg:text-[19px]">
          Say Hello
          </h1>
          <Link href={'mailto:onuohadarlington38@gmail.com'} className="text-[19px]  lg:text-[19px]">
          onuohadarlington38@gmail.com
          </Link>
          <h1  className="text-[19px]  lg:text-[19px]">
   07018933248
          </h1>
          </div>
          <div className="flex   gap-8  mulish-thin  text-white" >
            {mediaLink.map((data)=>(
 <Link href={data.href} className="text-[19px] lg:text-[19px]" key={data.id}>
{data.to}
 </Link>
            ))}
        
          </div>
          </div>
            </div>
        </div>
     </div>
    );
}
 
export default Overlay;