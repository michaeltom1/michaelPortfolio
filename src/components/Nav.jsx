import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { logon } from "../assets/assets";

function Nav() {
  const [active, setActive] = useState("#");
  const [menuClick, setMenuClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuClick(false);
    }
  };

  useEffect(() => {
    if (menuClick) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuClick]);

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
  return (
    <>
      <nav
        ref={menuRef}
        className={`${
          lastScrollTop === 0
            ? "bg-primary md:bg-transparent"
            : ` bg-primary md:bg-[#15161cd8] md:backdrop-blur-md shadow-2xl`
        } ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } duration-500  transition-all z-50 relative`}
      >
        <hr className="line-draw absolute bottom-0 border-accent w-0" />

        <div className={`${nav.container}`}>
          <div className="bg-accent animatePing rounded-full p-1  duration-500 ease-out">
            <a href="/">
              <img src={logon} alt="" />
            </a>
          </div>
          <div className="md:flex items-center gap-8 hidden">
            <motion.ul
              className={`${nav.ul} gap-8`}
              initial={{ y: "-10rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "ease-in",
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`${nav.li} ${
                    item.id === "Home" ? " " : "delay-0"
                  } transition list-disc marker:text-accent`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2, // Adjust the multiplier to control the delay between each item
                    duration: 0.5,
                    type: "ease-in-out",
                  }}
                >
                  <a
                    href={item.url}
                    onClick={() => setActive(item.url)}
                    className={`${active === item.url ? "text-accent" : ""}`}
                  >
                    {item.id}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="">
              <Buttons
                text="resume"
                to="/"
                width="w-28"
                height="h-10"
                hideIcon
              />
            </div>
          </div>

          <div
            className={`md:hidden text-3xl  cursor-pointer transform transition-transform duration-300 ease-in-out ${
              menuClick ? " rotate-90" : "rotate-0"
            } `}
            onClick={handleMenuClick}
          >
            {menuClick ? <MdClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <div
          className={`bg-primary absolute w-full md:hidden  shadow-4xl  ${
            menuClick ? "-translate-y-0" : "-translate-y-full hidden"
          }`}
        >
          <ul className=" font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={() => {
                    handleMenuClick();
                    setActive(item.url);
                  }}
                  className={`hover:text-accent hover:bg-primaryLight block py-4 px-4 ${
                    active === item.url ? "text-accent" : ""
                  }`}
                >
                  {item.id}
                </a>
              </li>
            ))}
          </ul>
          <div className="pl-4">
            <Buttons text="resume" to="" width="w-28" height="h-10" hideIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
