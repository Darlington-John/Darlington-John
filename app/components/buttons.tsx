import Link from "next/link";

const Button = (props: any) => {
    return ( 
        <Link href={props.to} className={` flex items-center  h-[50px]  w-[120px]  text-center   justify-center  2xl:w-[100px] 2xl:h-[40px]  2xl:text-sm  ${props.classic && 'bubble'} ${props.mustard && 'bubble-mustard'} ${props.mustardBig  && 'h-[60px]  w-[280px] bubble-mustard 2xl:w-[280px] 2xl:h-[60px]  2xl:text-base'}`}>
        {props.action}<span></span><span></span><span></span><span></span>
     </Link>
);
}
 
export default Button;