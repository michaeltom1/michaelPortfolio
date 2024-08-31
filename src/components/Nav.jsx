import { useState, useEffect, useRef } from "react";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { log0 } from "../assets/assets";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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
        className={`${
          lastScrollTop === 0 ? "" : `bg-[#272733d5]0 bg-primary backdrop-blur-lg shadow-sm`
        } ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } duration-500  transition-all z-50 `}
      >
        <div className={`${nav.container}`}>
          <div className="hover:bg-accent rounded-full p-1  duration-500 ease-out">
            <svg
              width="50"
              height="50"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // className="hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out transition-transform transform active:scale-95 hover:border border-accent rounded-full"
            >
              <circle cx="150" cy="150" r="150" fill="#15161C" />
              <path
                d="M72.7234 72.5455H116.26L153.192 162.602H154.897L191.828 72.5455H235.365V218H201.132V128.653H199.925L164.982 217.077H143.107L108.164 128.156H106.956V218H72.7234V72.5455Z"
                fill="#2ECC71"
              />
            </svg>
          </div>
          <ul className={`${nav.ul}`}>
            {navItems.map((item) => (
              <li key={item.id} className={`${nav.li}`}>
                <a href={`#${item.url}`}>{item.id}</a>
              </li>
            ))}
          </ul>
          <div
            className={`lg:hidden text-3xl cursor-pointer transform transition-transform duration-300 ease-in-out ${
              menuClick ? " rotate-90" : "rotate-0"
            } `}
            onClick={handleMenuClick}
          >
            {menuClick ? <MdClose /> : <HiOutlineMenuAlt3 />}
          </div>
        </div>
        <div
          className={`lg:hidden  absolute ease-in duration-300 left-0 w-full bg-[#272733d5] backdrop-blur-lg -z-50 ${
            menuClick ? "-translate-y-0 top-16" : "-translate-y-full top-0"
          }`}
        >
          <ul className={``}>
            {navItems.map((item) => (
              <li key={item.id} className={``}>
                <a
                  href={`#${item.url}`}
                  onClick={handleMenuClick}
                  className={`p-4 block hover:bg-[#353541] hover:text-accent w-full ease-in duration-300`}
                >
                  {item.id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
