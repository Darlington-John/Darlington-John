'use client'
import WorksLanding from "../sections/works/works-section";
import { useRef, useState, useEffect, useMemo } from 'react';
const Work = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
      const sectionOffsets = sectionRefs.current.map((section) =>
        section ? section.offsetTop : 0
      );

      let newActiveSection = 0;
      sectionOffsets.forEach((offset, index) => {
        if (scrollPosition >= offset) {
          newActiveSection = index;
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
    }
  };
    return (  
        <section className="overflow-y-auto   min-h-screen  snap-y snap-mandatory  works">
           <nav className="w-full fixed bottom-0">
        <ul>
          {Array.from({ length: 5 }).map((_, idx) => (
            <li
              key={idx}
              className={activeSection === idx ? 'active' : ''}
              onClick={() => scrollToSection(idx)}
            >
              Section {idx + 1}
            </li>
          ))}
        </ul>
      </nav>
      <div
             ref={(el) => {
              sectionRefs.current[0] = el;
            }}
              className="section-test  h-screen  snap-start "
            >
              <WorksLanding/>
            </div>
            <div
         ref={(el) => {
          sectionRefs.current[1] = el; // Correctly storing the refs
        }}
              className="section-test snap-start h-screen  "
            >
              <h1>Section 2</h1>
            </div>
            <div
             ref={(el) => {
              sectionRefs.current[2] = el; // Correctly storing the refs
            }}
              className="section-test snap-start h-screen "
            >
              <h1>Section 3</h1>
            </div>
            <div
           ref={(el) => {
            sectionRefs.current[3] = el; // Correctly storing the refs
          }}
              className="section-test snap-start h-screen "
            >
              <h1>Section 4</h1>
            </div>
            <div
        
              ref={(el) => {
                sectionRefs.current[4] = el; // Correctly storing the refs
              }}
              className="section-test snap-start h-screen "
            >
              <h1>Section 5</h1>
            </div>
          </section> );
}
 
export default Work;



