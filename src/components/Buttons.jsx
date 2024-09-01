import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Buttons({
  text,
  to,
  Icon = MdKeyboardDoubleArrowRight,
  hideIcon,
  width = "w-48",
  height = "h-16",
  fontWeight = "font-bold",
}) {
  return (
    <button
      className={` rounded-lg text-lg ${width} ${height} hover:bg-accent text-[#ffffff]`}
    >
      <Link
        to={to}
        className={`rounded-lg flex gap-2 items-center ${width} ${height} bg-primary justify-center hover:-translate-x-1 hover:-translate-y-1 duration-500 ease-out transition-transform transform active:scale-95 border-accent border`}
      >
        {text} {!hideIcon && <Icon className="text-3xl" />}
      </Link>
    </button>
  );
}
export default Buttons;