import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left  */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a href="https://www.chillapply.com/">
                <img
                  src="/images/chillapply.png"
                  alt="Library Management Platform"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>Chillapply - Job Application Automation</h2>
              <p className="text-white-50 md:text-xl">
                ChillApply is a Chrome extension that automates job applications on Workday.
              </p>
            </div>
          </div>
          {/* right  */}

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefbd]">
                <a href="https://descipr.com/">
                  <img src="/images/descipr.jpg" alt="ryde" />
                </a>
              </div>
              <h2>A.I Learning Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a href="https://quoppo.com/">
                  <img src="/images/Quoppo.jpg" alt="YC Directory" />
                </a>
              </div>
              <h2>Start-Up Building And Helping Business To Grow</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
