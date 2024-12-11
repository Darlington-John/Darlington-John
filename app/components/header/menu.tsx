import Link from "next/link";

const Menu = (props:any) => {
    const {menu, isMenuVisible, menuRef}=props;
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
        menu && (
            <div className={`bg-mustard   duration-300 absolute  -top-5  -right-5  overflow-hidden  dxs:hidden  z-[100]     ${isMenuVisible? ' expand opacity-100':' expand-hidden  opacity-20'}`} ref={menuRef}>
  <div className="flex flex-col bg-white h-full  relative" >
        <div className={`bg-mustard   duration-300 overflow-hidden h-full       `}>
          <div className=" flex flex-col gap-10 py-16 px-12 lg:gap-5  lg:py-10 lg:px-6 ">
          <div className="flex flex-col gap-5 mulish text-white text-nowrap lg:gap-2" >
            {worksLink.map((data)=>(
  <Link href={data.href} className="text-[19px] lg:text-base " key={data.id}>
  {data.to}
  </Link>
            ))}
          </div>
          <div className="flex flex-col gap-5 mulish text-white lg:gap-2 " >
          <h1  className="text-[19px] mulish-thin  text-[#ffffffa8]  lg:text-base">
          Say Hello
          </h1>
          <Link href={'mailto:onuohadarlington38@gmail.com'} className="text-[19px]  lg:text-base">
          onuohadarlington38@gmail.com
          </Link>
          <h1  className="text-[19px]  lg:text-base">
   07018933248
          </h1>
          </div>
          <div className="flex   gap-8  mulish-thin  text-white" >
            {mediaLink.map((data)=>(
 <Link href={data.href} className="text-[19px] lg:text-base" key={data.id}>
{data.to}
 </Link>
            ))}
        
          </div>
          </div>
            </div>
        </div>
            </div>
          )
      );
}
 
export default Menu;