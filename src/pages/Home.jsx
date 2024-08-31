// import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import mich from "../assets/images/mich.png";
import { services, projects } from "../data/Data";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { home, about, servicesStyle } from "../styles/Styles";
function Home() {
  return (
    <>
      <div>   
        <main>
          <section className={`${home.mainSection}`}>
            <motion.div
              initial={{ y: "7rem", x: 0, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{
                duration: 2,
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
            </motion.div>
          </section>
        </main>

        <section id="about">
          <div className={`${home.sectionCenter} `}>
            <div className="relative">
              <h2 className={`${home.sectionTitle} bg`}>About Me</h2>
              {/* <div className="w-full h-[1px] bg-accent absolute top-[50%]"></div> */}

              <div className="w-full h-[1px] grid grid-cols-2 gap-48 absolute top-[50%]">
                <div className="w-full h-[1px] bg-accent"></div>
                <div className="w-full h-[1px] bg-accent"></div>
              </div>
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
              </div>
              <div className={`${about.imgContiner}`}>
                <img src={mich} alt="" className={`${about.img}`} />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={`${home.sectionCenter}`}>
          <div className="relative">
            <h2 className={`${home.sectionTitle} py-10`}>Services</h2>
            <div className="w-full h-[1px] grid grid-cols-2 gap-48 absolute top-[50%]">
              <div className="w-full h-[1px] bg-accent"></div>
              <div className="w-full h-[1px] bg-accent"></div>
            </div>
          </div>
          <div className={servicesStyle.grid}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${servicesStyle.car} bg-primaryLight group h-96 duration-300 ease-in hover:shadow-6x hover:shadow-accent rounded-xl p-4 flex flex-col items-center text-center py-8 justify-center gap-6 borde border-accent text-[#9fa6c0]`}
              >
                <service.ico className={servicesStyle.ico} />
                <h3 className={servicesStyle.title}>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="Projects" className={`${home.sectionCenter}`}>
          <h2 className={`${home.sectionTitle}`}>Projects</h2>
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
          </div>
          <div className="text-center">
            <button className="font-bold rounded-lg text-lg w-48 h-16 hover:bg-accent text-[#ffffff]">
              <Link
                to=""
                className="rounded-lg flex gap-2 items-center w-48 h-16 bg-primary justify-center hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out transition-transform transform active:scale-95 border-accent border"
              >
                See More <MdKeyboardDoubleArrowRight className="text-3xl" />
              </Link>
            </button>
          </div>
        </section>

        <section
          id="contact"
          className={`${home.sectionCente} h-scree py-20 my-20 grid place-content-center  text-center `}
        >
          <div className="space-y-8">
            <h2 className={`${home.sectionTitle}`}>Get in Touch</h2>
            <p className="text-xl py-8">
              Ready to start a project together? Feel free to reach out via
              email or connect with me on social media
            </p>
            <div className="flex justify-center ">
              <button className="font-bold rounded-lg text-lg text-center   w-48 h-16 hover:bg-accent text-[#ffffff]">
                <a
                  href="mailto:mic81070@gmail.com"
                  className="rounded-lg flex items-center w-48 h-16 bg-primary justify-center hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out transition-transform transform active:scale-95 border-accent border"
                >
                  👋 Say Hello
                </a>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default Home;