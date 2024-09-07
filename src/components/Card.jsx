import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/Data";

const Card = ({
  title,
  description,
  image,
  webLink,
  gitLink,
  tags,
  GitIcon,
  LinkIcon,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href={webLink} target="_blank">
        <article className="h-80 shadow-4xl bg-primaryLight hover:-translate-x- hover:-translate-y-2 rounded-lg p-4o  duration-300 ease-in transition-transform transform active:scale-95 hover:scale-105 relative">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute bg-primary opacity-70 inset-0"></div>
          <div className="absolute inset-0 flex  justify-center text-white bg-slate-900 bg-opacity-50">
            <div className=" flex flex-col p-4 relative group text-textColor ">
              <p className="group-hover:text-accent text-textColorLight uppercase font-semibold text-2xl font-roboto mt-8 my-4">
                {title}
              </p>
              <p>{description}</p>
              <p>
                <br />A cool project showcasing my skills in web development.
                <br />
              </p>
              <div className="flex gap-4 items-center absolute  right-4">
                <Link to={gitLink} target="_blank" rel="noopener noreferrer">
                  <GitIcon
                    fontSize={25}
                    className="group-hover:text-accen duration-300 ease-in"
                  />
                </Link>
                <Link to={webLink} target="_blank" rel="noopener noreferrer">
                  <LinkIcon
                    fontSize={25}
                    className="group-hover:text-accen duration-300 ease-in"
                  />
                </Link>
              </div>
              <div className="text-gray-0 text-textColo text-sm text-accent left-4 absolute bottom-4">
                <p>{tags}</p>
              </div>
            </div>
          </div>
        </article>
      </a>
    </motion.div>
  );
};

const CardGrid = ({ x, y }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {projects.slice(x, y).map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.desc}
          tags={project.tags}
          webLink={project.webLink}
          gitLink={project.gitLink}
          image={project.img}
          GitIcon={project.gitIcon}
          LinkIcon={project.linkIcon}
        />
      ))}
    </div>
  );
};

export default CardGrid;
