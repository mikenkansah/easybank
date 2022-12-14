import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";
import pinterest from "../assets/icon-pinterest.svg";
import Button from "./buttons/Button";

const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-cyan-800">
      <div className="flex flex-col md:flex-row md:justify-between align-center ">
        <div className="flex-5">
          <img alt="" src={logo} />
          <div className="flex flex-row justify-between hover:cursor-pointer pt-10 ">
            <img alt="" className=" hover:text-green-400s" src={facebook} />
            <img alt="" src={instagram} />
            <img alt="" src={twitter} />
            <img alt="" src={youtube} />
            <img alt="" src={pinterest} />
          </div>

          <div className="text-white">
            <h4>Faceook</h4>
            <h4>Facebook</h4>
            <h4>Facebook</h4>
          </div>
          <div className="text-white">
            <h4>Career</h4>
            <h4>Support</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
        <div className="text-white flex-1">
          <Button name="Contact Us" />

          <h4>&copy; EasyBank All rights reserved</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
