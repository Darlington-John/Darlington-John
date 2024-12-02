import Link from "next/link";

const Button = (props: any) => {
    return ( <>
    {props.grey && (
        <Link href={props.to} className="bubble flex items-center  h-[50px]  w-[120px]  text-center   justify-center  2xl:w-[100px] 2xl:h-[40px]  2xl:text-sm ">
        {props.action}<span></span><span></span><span></span><span></span>
     </Link>

    )}
     {props.blue && (
             <Link  href={props.to}  className="bubble-blue  flex items-center  h-[50px]  w-[120px]  text-center   justify-center 2xl:w-[100px] 2xl:h-[40px]  2xl:text-sm">
              {props.action}<span></span><span></span><span></span><span></span>
          </Link>
    )}

    </> );
}
 
export default Button;