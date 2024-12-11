import Button from "../components/buttons";

const SeeWorks = () => {
    return (<section className="flex  py-40 items-center justify-center bg-greyBrown  w-full bg-fixed bg-cover" style={{ backgroundImage: `url(/assets/images/flowbg.jpg)`}}>
<div className="flex items-center flex-col gap-8  dxs:gap-6 ">
<div className="flex flex-col text-center  text-white gap-5  dxs:gap-4 ">
<h1 className="text-6xl   macho  xl:text-5xl  md:text-4xl  dxs:text-3xl  ">I build &
design stuff</h1>
<p className="text-2xl  mulish-thin  md:text-lg ">
Open source projects, web apps and experimentals.
</p>
</div>
<Button mustardBig to="/works" action="SEE MY WORKS"/>
</div>
    </section>  );
}
 
export default SeeWorks;