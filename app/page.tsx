'use client'
import About from "./sections/about";
import Darlington from "./sections/me";
import Projects from "./sections/projects";
import SeeWorks from "./sections/see-my-works";
import SendMessage from "./sections/send-message";
import WhatIDo from "./sections/what-i-do";


export default function Home() {



  return (
    <div className=" font-[family-name:var(--font-recoleta)] bg-darkBlue">

<Darlington/>
<WhatIDo/>
<SeeWorks/>
<SendMessage/>
    </div>
  );
}
