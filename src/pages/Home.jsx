import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import mich from "../assets/images/mich.png";
import { services, projects, projectsMore } from "../data/Data";
import { RiExternalLinkLine } from "react-icons/ri";
import { home, about, servicesStyle } from "../styles/Styles";
import Header from "../components/Header";
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


function Home() {
  const handleImgClick = () => {
    toast("Hi there", {
      position: "top-right",
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

const [seeMore, setSeeMore] = useState(false)
  const handleSeeMore = () => {
    setSeeMore(!seeMore)
  }
  return (
    <>
      <div>
        <Header />
        <main>
          <section className={`${home.mainSection} pt-16`}>
            <motion.div
              initial={{ y: 0, x: "-10rem", opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "ease-in",
              }}
            >
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
            </motion.div>
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
                <p>Some technologies and tools I’ve worked with with : </p>
                <div className="grid grid-cols-2 marker:text-accent pl-6">
                  <ul className="text-sm list-disc grid gap-x-8">
                    <li className="">HTML</li>
                    <li>CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                  </ul>
                  <ul className="text-sm list-disc grid">
                    <li>git</li>
                    <li>vscode</li>
                    <li>corelDraw</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className={`${about.imgContiner}`} onClick={handleImgClick}>
                <img src={mich} alt="" className={`${about.img} aImg`} />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className={`${home.sectionCenter}`}>
          <div className="relative">
            <h2 className={`${home.sectionTitle}`}>Services</h2>
            <hr className="line-draw absolute bottom-0 border-accent w-0 delay-500" />
          </div>
          <div className={`${servicesStyle.grid} `}>
            {services.map((service) => (
              <div key={service.id} className={`${servicesStyle.card}`}>
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
            {projects.map((project) => {
              return (
                <div key={project.id}>
                  <article className="h-96 shadow-4xl bg-primaryLight hover:-translate-x- hover:-translate-y-2 rounded-lg p-4  duration-300 ease-in transition-transform transform active:scale-95 ">
                    <div className="grid gap-2 lg:gap-4 ">
                      <div>
                        <img
                          src={project.img}
                          alt=""
                          className="rounded-md h-40  w-full bg-tec border-transparent"
                        />
                        <p className="uppercase font-firacode text-xl font-bold text-accent">
                          {project.title}
                        </p>
                      </div>

                      <div className="lg:space-y-2">
                        <p className="uppercase font-firacode font-bold ">
                          {project.desc}
                        </p>
                        <p className="font-roboto">{project.tags}</p>
                      </div>

                      <div className="flex text-accent text-3xl gap-4">
                        <div>
                          <abbr title="github">
                            <Link
                              to="https://github.com/Michael-T55/myWebpage"
                              target="_blank"
                            >
                              <GrGithub />
                            </Link>
                          </abbr>
                        </div>
                        <div>
                          <abbr title="Live demo">
                            <Link
                              to="https://michaeltom3.vercel.app/"
                              target="_blank"
                            >
                              <RiExternalLinkLine />
                            </Link>
                          </abbr>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
            {projectsMore.map((project) => {
              return (
                <div
                  key={project.id}
                  className={`${seeMore ? "block" : "hidden"} duration-300 ease-in `}
                >
                  <article className="h-96 shadow-4xl bg-primaryLight hover:-translate-x- hover:-translate-y-2 rounded-lg p-4  duration-300 ease-in transition-transform transform active:scale-95 ">
                    <div className="grid gap-2 lg:gap-4 ">
                      <div>
                        <img
                          src={project.img}
                          alt=""
                          className="rounded-md h-40  w-full bg-tec border-transparent"
                        />
                        <p className="uppercase font-firacode text-xl font-bold text-accent">
                          {project.title}
                        </p>
                      </div>

                      <div className="lg:space-y-2">
                        <p className="uppercase font-firacode font-bold ">
                          {project.desc}
                        </p>
                        <p className="font-roboto">{project.tags}</p>
                      </div>

                      <div className="flex text-accent text-3xl gap-4">
                        <div>
                          <abbr title="github">
                            <Link
                              to="https://github.com/Michael-T55/myWebpage"
                              target="_blank"
                            >
                              <GrGithub />
                            </Link>
                          </abbr>
                        </div>
                        <div>
                          <abbr title="Live demo">
                            <Link
                              to="https://michaeltom3.vercel.app/"
                              target="_blank"
                            >
                              <RiExternalLinkLine />
                            </Link>
                          </abbr>
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
