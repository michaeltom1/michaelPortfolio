import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true);
         observer.unobserve(entry.target); // Stop observing the element
       }
      // setIsVisible(entry.isIntersecting);
    });

    const elementReff = elementRef.current;

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }



    return () => {
      if (elementReff) {
        observer.unobserve(elementReff);
      }
    };
  }, []);

  return (
    <footer ref={elementRef} className="py-10 relative">
      <hr
        className={`${
          isVisible ? `line-draw` : ``
        } absolute top-0 border-accent w-0`}
      />
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

/*

*/
