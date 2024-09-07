import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import { useEffect, useState, useRef } from "react";
import mich from "../assets/images/mich.png";
import { services } from "../data/Data";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { home, about, servicesStyle } from "../styles/Styles";
import { motion, useInView } from "framer-motion";
import CardGrid from "../components/Card";

function Home() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
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
          <div className={`${servicesStyle.grid}`}>
            {services.map((service, index) => (
              <motion.div
                initial={{ x: "-100%"}} // Start off-screen
                whileInView={{ x: 0}} // Slide in and fade in
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{once: true}}
               

                key={service.id}
                className={`${servicesStyle.card} ${
                  service.id === 1 ? "duration-200" : ""
                } ${service.id === 2 ? "duration-300" : ""}`}
              >
                <service.ico className={servicesStyle.ico} />
                <h3 className={servicesStyle.title}>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="projects" className={`${home.sectionCenter}`}>
          <div className="relative">
            <h2 className={`${home.sectionTitle}`}>Projects</h2>
            <hr className="line-draw absolute bottom-0 border-accent w-0 delay-500" />
          </div>
          <CardGrid x="0" y="6" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`${seeMore ? "block" : "hidden"} duration-300 ease-in `}
          >
            <CardGrid x="6" />
          </motion.div>
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
        <section
          id="contact"
          ref={scrollRef}
          className="overflow-scroll hideScrollBar"
        >
          <motion.div
            className={`${home.sectionCenter} `}
            initial={{ opacity: 0, translateY: "20rem" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, root: scrollRef }}
          >
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
          </motion.div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default Home;
