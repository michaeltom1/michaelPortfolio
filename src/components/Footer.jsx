import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-fot py-6">
      <div className="font-medium text-center space-y-4">
        <div className="flex text-accent gap-4 justify-center">
          <FiFacebook className={`hover:text-white`} />
          <FiInstagram className={`hover:text-white`} />
          <FiGithub className={`hover:text-white`} />
          <FiLinkedin className={`hover:text-white`} />
          <FiMail className={`hover:text-white`} />
        </div>
        <h2 className="text-accent text-xl ">Designed by Michael Tom</h2>
        <p className="text-gray-400 text-xs text-center">
          © Copyright Michael Tom. Design And Developed By Michael
        </p>
      </div>
    </footer>
  );
}
export default Footer;
