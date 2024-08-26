import { useState, useEffect } from "react";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { favicon } from "../assets/assets";
import { motion } from "framer-motion";

function Nav() {
  const [menuClick, setMenuClick] = useState(true);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  // ${nav.bg}
  return (
    <>
      <div className="">
        <nav
          className={`${lastScrollTop === 0 ? "" : `bg-[#272733d5] `} ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } duration-500  transition-all `}
        >
          <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1.0 }}
            className={`${nav.container}`}
          >
            <div>
              <h1>
                <Link to="/">
                  <img src={favicon} alt="" className="w-10 logo" />
                </Link>
              </h1>
            </div>
            <ul className={`${nav.ul}`}>
              {navItems.map((item) => (
                <li key={item.id} className={`${nav.li} nav`}>
                  <a href={`#${item.url}`}>{item.id}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              {menuClick ? <CgMenu /> : <MdClose />}
            </div>
          </motion.div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
