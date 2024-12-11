'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
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


const Footer = () => {
    const linkname = usePathname();
    return (  <div className={`w-full relative h-screen  flex shrink-0 bg-fixed bg-cover  items-center justify-center pt-40 pb-28  px-40  text-white mulish xl:px-12  md:px-8  ${linkname==="/works" && "hidden"}`} style={{ backgroundImage: `url(/assets/images/flowBg.jpg)`}}>
<div className="flex flex-col  gap-20 w-full">
<div className="flex gap-60 w-full  p-2  lg:gap-32 md:gap-12   sm:flex-col sm:gap-10 ">
<div className="flex flex-col gap-5 text-[21px] lg:text-base sm:self-start  dxs:text-sm sm:gap-3 ">
    <h1 className="tracking-widest text-[#ffffffad]">SAY HELLO</h1>
<Link href={'mailto:onuohadarlington38@gmail.com'} className="  lg:text-base  dxs:text-sm">
          onuohadarlington38@gmail.com
          </Link>
          <h1 className="  lg:text-base  dxs:text-sm">
        07018933248
          </h1>
</div>
<div className="flex flex-col gap-5 text-[21px] mt-20 lg:text-base  sm:self-end sm:mt-0 dxs:text-sm sm:gap-3 ">
          {worksLink.map((data)=>(
  <Link href={data.href} className="  lg:text-base dxs:text-sm " key={data.id}>
  {data.to}
  </Link>
            ))}
</div>
</div>
<div className="w-full  pt-20 flex  items-center justify-between text-[21px] border-t border-mustard border-t-2 2xs:flex-col 2xs:gap-5  sm:pt-12 ">
<h1 className="lg:text-lg dxs:text-base 2xs:self-start">© John Darlington 2024</h1>
<div className="flex gap-5 dxs:gap-3 2xs:self-end">
{mediaLink.map((data)=>(
 <Link href={data.href} className="text-[19px] lg:text-base dxs:text-sm " key={data.id}>
{data.to}
 </Link>
            ))}
</div>
</div>
</div>
    </div>);
}
 
export default Footer;