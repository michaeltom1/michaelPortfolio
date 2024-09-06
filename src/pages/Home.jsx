import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import { useEffect, useState } from "react";
import mich from "../assets/images/mich.png";
import { services, projects } from "../data/Data";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { home, about, servicesStyle } from "../styles/Styles";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => { 
    setSeeMore(!seeMore);
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <section className={`${home.mainSection} pt-16`}>
            <div className="hide">
              <p className={`${home.hi}`}>Hi i am,</p>
              <p className={`${home.name}`}>
                Michael Tom<span className={`${home.green}`}>.</span>
              </p>
              <p className={`${home.intro}`}>
                I am a Web Developer who specialized in creating responsive and
                user-friendly websites.
              </p>
              <div className="py-6">
                <Buttons text="Learn More" to="#about" />
              </div>
            </div>
          </section>
        </main>
        <section id="about">
          <div className={`${home.sectionCenter} `}>
            <div className="relative">
              <h2 className={`${home.sectionTitle}`}>About Me</h2>
              <hr className="line-draw absolute bottom-0 border-accent w-0 delay-500" />
            </div>
            <div className={`${about.flex}`}>
              <div className={`${about.bio}`}>
                <div className="hide space-y-4">
                  <p>
                    I am a passionate web developer specialized in crafting
                    visually appealing websites that are responsive, functional
                    and user-friendly. My portfolio showcases my journey and
                    expertise in these fields.
                  </p>
                  <p>
                    In my spare time, I enjoy working on side projects, learning
                    new technologies, and contributing to open source.
                  </p>
                </div>
                <p className="hide">
                  Some technologies and tools I’ve worked with with :{" "}
                </p>
                <div className="hide flex  marker:text-accent pl-6 gap-16">
                  <ul className="text-sm list-disc grid">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>tailwindcss</li>
                    <li>React</li>
                  </ul>
                  <ul className="text-sm list-disc grid">
                    <li>git</li>
                    <li>vscode</li>
                    <li>Python</li>
                    <li>firebase</li>
                    <li>corelDraw</li>
                  </ul>
                </div>
              </div>
              <div className={`${about.imgContiner}`}>
                <img src={mich} alt="" className={`${about.img} aImg`} />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className={`${home.sectionCenter}`}>
          <div className="relative">
            <h2 className={`${home.sectionTitle}`}>Services</h2>
            <hr className="line-draw absolute bottom-0 border-accent w-0 delay-500 hide" />
          </div>
          <div className={`${servicesStyle.grid} hide`}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${servicesStyle.card} ${
                  service.id === 1 ? "duration-200" : ""
                } ${service.id === 2 ? "duration-300" : ""}`}
              >
                <service.ico className={servicesStyle.ico} />
                <h3 className={servicesStyle.title}>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className={`${home.sectionCenter}`}>
          <div className="relative">
            <h2 className={`${home.sectionTitle}`}>Projects</h2>
            <hr className="line-draw absolute bottom-0 border-accent w-0 delay-500" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {projects.slice(0, 6).map((project) => {
              return (
                <a href={project.webLink} target="_blank" key={project.id} className="hide">
                  <article className="h-80 shadow-4xl bg-primaryLight hover:-translate-x- hover:-translate-y-2 rounded-lg p-4o  duration-300 ease-in transition-transform transform active:scale-95 hover:scale-105 relative">
                    <img
                      src={project.img}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div className="absolute bg-primary opacity-70 inset-0"></div>
                    <div className="absolute inset-0 flex  justify-center text-white bg-slate-900 bg-opacity-50">
                      <div className=" flex flex-col p-4 relative group text-textColor ">
                        <p className="group-hover:text-accent text-textColorLight uppercase font-semibold text-2xl font-roboto mt-8 my-4">
                          {project.title}
                        </p>
                        <p>{project.desc}</p>
                        <p>
                          <br />A cool project showcasing my skills in web
                          development.
                          <br />
                        </p>
                        <div className="flex gap-4 items-center absolute  right-4">
                          <Link to={project.gitLink}>
                            <project.gitIcon
                              fontSize={25}
                              className="group-hover:text-accen duration-300 ease-in"
                            />
                          </Link>
                          <Link to={project.webLink}>
                            <project.linkIcon
                              fontSize={25}
                              className="group-hover:text-accen duration-300 ease-in"
                            />
                          </Link>
                        </div>
                        {/* <div className="flex items-center justify-between right-0 absolute bottom-4 px-4 -slate-300 w-full"> */}
                        <div className="text-gray-0 text-textColo text-sm text-accent left-4 absolute bottom-4">
                          <p>{project.tags}</p>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </article>
                </a>
              );
            })}
            {projects.slice(3).map((project) => {
              return (
                <div
                  key={project.id}
                  className={`${
                    seeMore ? "block" : "hidden"
                  } duration-300 ease-in `}
                >
                  <article className="h-80 shadow-4xl bg-primaryLight hover:-translate-x- hover:-translate-y-2 rounded-lg p-4o  duration-300 ease-in transition-transform transform active:scale-95 hover:scale-105 relative">
                    <img
                      src={project.img}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div className="absolute bg-primary opacity-70 inset-0"></div>
                    <div className="absolute inset-0 flex  justify-center text-white bg-slate-900 bg-opacity-50">
                      <div className=" flex flex-col p-4 relative group text-textColor ">
                        <p className="group-hover:text-accent text-textColorLight uppercase font-semibold text-2xl font-roboto mt-8 my-4">
                          {project.title}
                        </p>
                        <p>{project.desc}</p>
                        <p>
                          <br />A cool project showcasing my skills in web
                          development.
                          <br />
                        </p>
                        <div className="flex gap-4 items-center absolute  right-4">
                          <Link to={project.gitLink}>
                            <project.gitIcon
                              fontSize={25}
                              className="group-hover:text-accen duration-300 ease-in"
                            />
                          </Link>
                          <Link to={project.webLink}>
                            <project.linkIcon
                              fontSize={25}
                              className="group-hover:text-accen duration-300 ease-in"
                            />
                          </Link>
                        </div>
                        <div className="flex items-center justify-between right-0 absolute bottom-4 px-4 -slate-300 w-full">
                          <div className="text-gray-0 text-textColo text-sm text-accent ">
                            <p>{project.tags}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            {seeMore ? (
              <Buttons
                text={seeMore ? "Show less" : "Show More"}
                onClick={handleSeeMore}
                Icon={MdKeyboardDoubleArrowLeft}
              />
            ) : (
              <Buttons
                text={seeMore ? "Show less" : "Show More"}
                onClick={handleSeeMore}
              />
            )}
          </div>
        </section>
        <section id="contact" className={home.sectionCenter}>
          <div className="space-y-8 my-20 grid place-content-center  text-center ">
            <h2 className={`${home.sectionTitle}`}>Get in Touch</h2>
            <p className="text-xl py-8">
              Ready to start a project together? Feel free to reach out via
              email or connect with me on social media
            </p>
            <div className="flex justify-center ">
              <Buttons
                text="Say Hello 👋"
                to="mailto:mic81070@gmail.com"
                hideIcon
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default Home;
