import booknest from './../../public/assets/images/booknest.png'
import spotify from './../../public/assets/images/spotify.png'
import loudmob from './../../public/assets/images/loudmob.png'
import graphy from './../../public/assets/images/graphy.png'
import tbh from './../../public/assets/images/tbh.png'
import Project from "../components/project";

const Projects = () => {
    const projects=[
        {
            src: booknest,
            decription: 'This is a library project I designed using MongoDB as the database and a little Redux. Users can sign in and add books to their library, create stacks, and add books to each stack. Users can read and also donate books to the community, add reviews and ratings to books donated by the community, and more.',
            project: 'BookNest',
            image: true,
            link: 'https://darlington-booknest.vercel.app/',
            gitLink: 'https://github.com/Darlington-John/darlington-booknest'
        },
        {
            src: '/assets/videos/fruitful.mp4',
            decription: 'This is a financial-assitance  project I cloned from fruitful.com and designed from scratch using Xata as the database and  Nextjs. Users can sign in and choose their guides. I love cloning sites with a lot of animations and this was one of them',
            project: 'Fruitful',
           video: true,
           link: 'https://darlington-fruitful.vercel.app/' ,
              gitLink: 'https://github.com/Darlington-John/darlington-fruitful'
               },
               {
                src: spotify,
                decription: `One of my favourite hard projects, It's a music playing project where users can sign in  with Clerk api, play songs and create  playlists. Wish I had done this recently It would have been much more better.`,
                project: 'Spotify',
               image: true,
               link: 'https://darlington-spotify.vercel.app/' ,
                  gitLink: 'https://github.com/Darlington-John/Darlington-Spotify'
                   },
                   {
                    src: loudmob,
                    decription: `A Branding project, no authentication here... Just wanted to work on my onScroll animations and videos. It's funny looking back and realizing these projects would have been better but I can't bring myself to update them.`,
                    project: 'Loudmob',
                   image: true,
                   link: 'https://darlington-loudmob.vercel.app/' ,
                      gitLink: 'https://github.com/Darlington-John/Darlington-Loudmob'
                       },
                       {
                        src: graphy,
                        decription: `Another Wow this sites looks tough to create can i do this...Graphy was my first project with Remix. In Graphy I was working on graphs creation and also animations on hover`,
                        project: 'Graphy',
                       image: true,
                       link: 'https://darlington-graphy.vercel.app/' ,
                          gitLink: 'https://github.com/Darlington-John/Darlington-Graphy'
                           },
                           {
                            src: tbh,
                            decription: `This is a mental-help site for students created with React... In this i was working on animation of SVGS and multiple pages with React, this was a long time ago.`,
                            project: 'TBH',
                           image: true,
                           link: 'https://darlingtontbh.web.app/' ,
                              gitLink: 'https://github.com/Darlington-John/TBH'
                               }
    ]
    return ( <section className="flex flex-col gap-16  items-center w-full xs:gap-8">
        <div className='flex flex-col gap-2 items-center  sm:px-4 sm:items-start'>
<h1 className="text-5xl text-white 2xl:text-4xl lg:text-3xl xs:text-2xl    sm:text-start  text-blue">
    Projects
</h1>
<p className="text-base text-white w-[600px] text-center font-[family-name:var(--font-mulish)]  sm:text-sm sm:w-full xs:text-start ">
    This are all sites I worked on myself, not owned by any company or organization.
</p>
</div>
<div className='flex flex-col xl:gap-16  gap-32 '>
{projects.map((data, index)=>(
    <Project {...data}  key={index + 1} data={data}/>
))}
</div>
<p className="text-base text-white w-[600px] text-center font-[family-name:var(--font-mulish-semibold)]  sm:text-sm sm:w-full xs:text-start ">
Contact for more
</p>
    </section> );
}
 
export default Projects;