import { useState, useEffect } from "react";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { favicon } from "../assets/assets";

function Nav() {
  const [menuClick, setMenuClick] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  }
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
      <div className="">
        <nav
          className={`${
            lastScrollTop === 0
              ? ""
              : `bg-[#272733d5] backdrop-blur-lg shadow-sm`
          } ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } duration-500  transition-all z-50 `}
        >
          <div className={`${nav.container}`}>
            <div>
              <h1>
                <Link to="/">
                  <img src={favicon} alt="" className="w-10 logo" />
                </Link>
              </h1>
            </div>
            <ul className={`${nav.ul}`}>
              {navItems.map((item) => (
                <li key={item.id} className={`${nav.li}`}>
                  <a href={`#${item.url}`}>{item.id}</a>
                </li>
              ))}
            </ul>
            <div
              className={`lg:hidden text-3xl cursor-pointer ${
                menuClick ? "rot" : ""
              } `}
              onClick={handleMenuClick}
            >
              {menuClick ? <MdClose /> : <CgMenu />}
            </div>
          </div>

          <div
            className={`lg:hidden  absolute ease-in duration-300 left-0 w-full bg-[#272733d5] backdrop-blur-lg ${
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
      </div>
    </>
  );
}
export default Nav;


