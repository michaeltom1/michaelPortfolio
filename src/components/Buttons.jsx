import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Buttons({ text, to, Icon = MdKeyboardDoubleArrowRight, hideIcon }) {
  return (
    <button className="font-bold rounded-lg text-lg w-48 h-16 hover:bg-accent text-[#ffffff]">
      <Link
        to={to}
        className="rounded-lg flex gap-2 items-center w-48 h-16 bg-primary justify-center hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out transition-transform transform active:scale-95 border-accent border"
      >
        {text} {!hideIcon && <Icon className="text-3xl" />}
      </Link>
    </button>
  );
}
export default Buttons;