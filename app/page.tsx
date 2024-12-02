import About from "./sections/about";
import Darlington from "./sections/me";
import Projects from "./sections/projects";


export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-recoleta)] bg-darkBlue">
<Darlington/>
<Projects/>
<About/>
    </div>
  );
}
