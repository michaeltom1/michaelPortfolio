import { mweb3 } from "../assets/assets";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { GrGithub } from "react-icons/gr";
import { RiExternalLinkLine } from "react-icons/ri";

function Projects() {
  return (
    <>
      <section className="w-4/5 m-auto py-16">
        <h1 className="text-4xl text-center font-bold">Projects</h1>
        <div className="grid grid-cols-3 gap-8 py-8">
          <div className="h-96 bg-[#272733] rounded-md p-4">
            <p>blog</p>
          </div>
          <div className="h-96  bg-[#272733] rounded-md p-4">
            <p>notes</p>
          </div>

          <div className="h-96 bg-[#272733] rounded-md p-4">
            <p>movie website</p>
          </div>
          <div className="h-96 bg-[#272733] rounded-md p-4">
            <p>ecomerce</p>
          </div>
          <div className="h-96 bg-[#272733] rounded-md p-4">
            <p>neco</p>
          </div>

          <article className="h-96 bg-[#272733] border border-accent  rounded-md p-4">
            <div className="space-y-4">
              <div>
                <img src={mweb3} alt="" className="rounded-md" />
                <p className="uppercase font-firacode text-xl font-bold text-accent">
                  My Website
                </p>
              </div>
              <div className="space-y-2">
                <p className="uppercase font-firacode font-bold ">
                  A brief description of the project, highlighting its features
                  and purpose.
                </p>
                <p className="font-roboto">HTML, CSS, JavaScript, react</p>
              </div>

              <div className="flex text-accent text-3xl gap-4">
                <abbr title="Github">
                  <Link
                    to="https://github.com/Michael-T55/myWebpage"
                    target="_blank"
                  >
                    <GrGithub />
                  </Link>
                </abbr>
                <abbr title="Live demo">
                  <Link to="https://michaeltom3.vercel.app/" target="_blank">
                    <RiExternalLinkLine />
                  </Link>
                </abbr>
              </div>
            </div>
          </article>
        </div>
        <div className="text-center">
          <Buttons text="See more" />
        </div>
      </section>
    </>
  );
}
export default Projects;
/*
ecomerce
movie website
chat app
expence tracker
blog website
car rental
*/
