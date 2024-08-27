import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GrGithub } from "react-icons/gr";
import Buttons from "../components/Buttons";
import mich from "../assets/images/mich.png";
import { services, projects } from "../data/Data";
import { RiExternalLinkLine } from "react-icons/ri";

import { home, about, servicesStyle } from "../styles/Styles";
function Home() {
  return (
    <>
      <div>
        <header className={`fixed w-full `}>
          <Nav />
        </header>

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
              <p className={`${home.hi} hi`}>Hi am,</p>
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

        <section id="about" className={`${about.bg}`}>
          <div className={`${home.sectionCenter}`}>
            <h2 className={`${home.sectionTitle}`}>About</h2>
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
          <h2 className={`${home.sectionTitle}`}>Services</h2>
          <div className={servicesStyle.grid}>
            {services.map((service) => (
              <div key={service.id} className={servicesStyle.card}>
                <service.ico className={servicesStyle.ico} />
                <h3 className={servicesStyle.title}>{service.title}</h3>
                <p>{service.desc}</p>
                <Buttons text="Learn More" />
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
                  <article className="h-96 bg-[#272733] hover:border hover:border-accent shadow-5xl shadow-accent   rounded-2xl p-4 transition-all duration-500 ease-in">
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
                              to="https://michaeltom3.vercel.app/"
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
            <Buttons text="See more" />
          </div>
        </section>

        <section id="contact" className={`${home.sectionCenter}`}>
          <h2 className={`${home.sectionTitle}`}>Contact</h2>
          <div className="flex justify-center pt-8">
            <form action="" className="grid gap-4 w-1/2 font-medium">
              <input
                type="text"
                required
                placeholder="Name"
                className="outline-none border-none rounded-md h-12 p-4 bg-[#272733]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="outline-none border-none rounded-md h-14 p-4 bg-[#272733]"
                autoComplete="email"
              />
              <textarea
                id=""
                name=""
                required
                placeholder="message"
                className="outline-none border-none rounded-md h-60 resize-none p-4 bg-[#272733]"
              ></textarea>

              <button className="bg-gradient-to-r from-[#33d175] to-green-600 p-4 rounded-md font-medium text-xl hover:from-[#33d175c7] hover:to-green-500 text-white duration-500 ease-out">
                <a href="mailto:email@gmail.com">Email me</a>
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-[#131316] py-6">
          <div className="font-medium text-center space-y-4">
            <h2 className="text-[#2ecc71] text-xl ">Designed by Michael Tom</h2>
            <p className="text-gray-400 text-xs text-center">
              © Copyright Michael Tom. Design And Developed By Michael
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Home;
