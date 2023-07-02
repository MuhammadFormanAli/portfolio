import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4 list-none cursor-pointer">
        <li className="ml-1"><Link to="hero" spy={true} smooth={true} duration={500} offset={-90}>Home</Link></li>
        <li className="ml-1"><Link to="about" spy={true} smooth={true} duration={500} offset={-100}>About</Link></li>
        <li className="ml-1"><Link to="project" spy={true} smooth={true} duration={500} offset={-100}>Projects</Link></li>
        <li className="ml-1"><Link to="contact" spy={true} smooth={true} duration={500} offset={-70}>Contact Me</Link></li>

      </div>
      <div>
        <div className="grid grid-flow-col text-lg gap-4">
          <a href="https://github.com/MuhammadFormanAli" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/muhammadforman.ali" target="_blank" rel="noreferrer"><FaFacebook /></a>

        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Forman Ali</p>
      </div>
    </footer>
  );
};

export default Footer;