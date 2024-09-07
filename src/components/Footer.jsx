import { FiFacebook, FiInstagram, FiGithub, FiLinkedin, FiMail, } from "react-icons/fi";
import DrawingLine from "./DrawingLine";
function Footer() {
  return (
    <footer className="py-10 relative">
      <DrawingLine />
      <div className="font-medium text-center space-y-4">
        <div className="flex text-accent gap-4 justify-center">
          <FiFacebook className={`hover:text-white`} />
          <FiInstagram className={`hover:text-white`} />
          <FiGithub className={`hover:text-white`} />
          <FiLinkedin className={`hover:text-white`} />
          <FiMail className={`hover:text-white`} />
        </div>
        <p className="text-gray-400 hover:text-accent duration-100 ease-in text-xs text-center">
          Design And Developed By Michael Tom
        </p>
      </div>
    </footer>
  );
}
export default Footer;