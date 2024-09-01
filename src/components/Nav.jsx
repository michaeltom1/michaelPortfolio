import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Buttons from "./Buttons"

function Nav() {
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
        className={`${lastScrollTop === 0 ? "" : ` bg-primary`} ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } duration-500  transition-all z-50 border- border-accent relative`}
      >
        <hr className="line-draw absolute bottom-0 border-accent w-0" />

        <div className={`${nav.container}`}>
          <div className="bg-accent animatePing rounded-full p-1  duration-500 ease-out">
            <Link to="/">
              <svg
                width="30"
                height="30"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#15161C" />
                <path
                  d="M72.7234 72.5455H116.26L153.192 162.602H154.897L191.828 72.5455H235.365V218H201.132V128.653H199.925L164.982 217.077H143.107L108.164 128.156H106.956V218H72.7234V72.5455Z"
                  fill="#2ECC71"
                />
              </svg>
            </Link>
          </div>
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
                className={`${nav.l} ${
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
                <a href={`#${item.url}`}>{item.id}</a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="absolute right-10 hidden lg:block">
            <Buttons text="resume" width="w-28" height="h-10" hideIcon />
          </div>

          <div
            className={`lg:hidden text-3xl  cursor-pointer transform transition-transform duration-300 ease-in-out ${
              menuClick ? " rotate-90" : "rotate-0"
            } `}
            onClick={handleMenuClick}
          >
            {menuClick ? <MdClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden  absolute ease-in duration-300 left-0 w-full bg-primary border-b border-accent ${
          menuClick ? "-translate-y-0 top-16" : "-translate-y-full top-0"
        }`}
      >
        <ul className={``}>
          {navItems.map((item) => (
            <li key={item.id} className={``}>
              <a
                href={`#${item.url}`}
                onClick={handleMenuClick}
                className={`p-4 block hover:text-accent w-full ease-in duration-300 font-roboto`}
              >
                {item.id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Nav;
