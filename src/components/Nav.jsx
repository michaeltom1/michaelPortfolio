import { useState } from "react";
import { nav } from "../styles/Styles";
import { navItems } from "../data/Data";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { favicon } from "../assets/assets";

function Nav() {
  const [menuClick, setMenuClick] = useState(true);
  return (
    <>
      <div>
        <nav className={`${nav.bg}`}>
          <div className={`${nav.container}`}>
            <div>
              <h1>
                <Link to="/">
                  <img src={favicon} alt="" className="w-10" />
                </Link>
              </h1>
            </div>
            <ul className={`${nav.ul}`}>
              {navItems.map((item) => (
                <li key={item.id} className={`${nav.li}`}>
                  <a href={`#${item.id}`}>{item.id}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              {menuClick ? <CgMenu /> : <MdClose />}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
