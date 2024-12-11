import Image from "next/image";
import Button from "../components/buttons";
import plane from '~/public/assets/images/plane.svg'
import envelope from '~/public/assets/images/envelope.svg'
import quill from  '~/public/assets/images/quill.svg'
import { useState } from "react";
const SendMessage = () => {
    const [email, setEmail]= useState('');
    const [name, setName]= useState('');
    const [message, setMessage]= useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent]=useState(false);
    const [error, setError]=useState('')
    const check = !(email && name && message);
    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (check) {
           setSending(false);
           setError('All fields are required');
           return;
        } else {
           setSending(true);
        }
        try {
           const res = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, message, name}),
           });
  
           if (res.ok) {
              setSending(false);
              setSent(true);
              setMessage('');
              setName('');
              setEmail('');
              setTimeout(()=> setSent(false), 4000)

           } else {
              const data = await res.json();
              setError(data.error || 'Email not sent');
              setSending(false);
           }
        } catch (err) {
           setError('An unexpected error occurred');
           setSending(false);
        }
     };
    return (<section className="flex flex-col gap-16 items-center justify-center py-20 bg-beige  relative lg:gap-10  lg:py-16  md:px-4 md:gap-6">
        <Image src={envelope} alt="" className="w-32 absolute top-10 left-10 z-10 opacity-20 dance lg:hidden"/>
        <Image src={quill} alt="" className="w-32 absolute bottom-10 right-10 z-10 opacity-20  lg:hidden dance "/>
        <div className="absolute  bottom-0  left-0 w-[100%]  overflow-hidden flex items-end h-full dxs:w-full  pointer-events-none" >
            
        <Image src={plane} alt='' className=" min-h-full h-full       opacity-20  w-full   "/>
        </div>
        <div className="flex flex-col gap-4 text-center md:gap-0">
<h1 className="text-6xl   macho  xl:text-5xl  md:text-4xl  dxs:text-3xl rust  ">
Send me a message!
</h1>
<p className="text-2xl  mulish-thin  md:text-lg text-greyBrown  sm:text-base ">
Got a question or proposal, or just want<br/>
to say hello? Go ahead.
</p>
        </div>
        <form className="flex flex-col gap-10 lg:gap-10  lg:py-16  md:px-4 md:gap-6 md:w-full md:py-4" onSubmit={handleSend}>
        <div className="flex flex-col gap-6 w-[740px]  md:w-full">
<div className="flex w-full gap-4 dxs:flex-col">
    <div className="flex flex-1 flex-col gap-2">
<h1 className="text-greyBrown mulish-thin text-sm">
    Your Name
</h1>
<input className="bg-transparent  p-2 w-full border-b-2   border-[#c7c1bd]   focus:border-mustard     outline-none text-greyBrown mulish-thin    sm:text-sm" placeholder="Edmund Lancaster" name="firstName" type="text"  value={name} onChange={(e)=> {setName(e.target.value); setError('')}}/>
    </div>
    <div className="flex flex-1 flex-col gap-2">
<h1 className="text-greyBrown mulish-thin text-sm">
    Email Address
</h1>
<input className="bg-transparent  p-2 w-full border-b-2   border-[#c7c1bd]   focus:border-mustard     outline-none text-greyBrown mulish-thin   sm:text-sm  " placeholder="lancastersayshello@gmail.com"  type="email" name="email"  value={email} onChange={(e)=>{ setEmail(e.target.value); setError('')}} />
    </div>
</div>

<div className="flex  flex-col gap-2">
<label className="text-greyBrown mulish-thin text-sm">
    Your Message
</label>
<textarea className="bg-transparent  p-2 w-full border-b-2   border-[#c7c1bd]   focus:border-mustard     outline-none text-greyBrown mulish-thin sm:text-sm" placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"   value={message} onChange={(e)=> {setMessage(e.target.value); setError('')}}/>

</div>
        </div>
        <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-[#DC0000] mulish-thin  h-4">
{error}
        </p>
        <button  className={` flex items-center  h-[50px]  w-[120px]  text-center   justify-center  2xl:w-[100px] 2xl:h-[40px]  2xl:text-sm  h-[60px]  w-[280px]  2xl:w-[280px] 2xl:h-[60px]  2xl:text-base ${sent?'bg-[#566D44] text-white ':sending? 'bg-mustard text-white': 'bubble-mustard'}`} 
        disabled={sending} type="submit">
{sent? 'SENT': sending? 'SENDING':'SEND'}
            <span></span><span></span><span></span><span></span>
     </button>
     </div>
     </form>
    </section>  );
}
 
export default SendMessage;