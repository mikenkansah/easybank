import logo from '../assets/logo.svg';
import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';


const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-cyan-800">
      <div className="flex flex-col md:flex-row ">
        <div>
            <img alt=""  src={logo}/>
            <div className="flex flex-row justify-between" >
                <img alt="" src={facebook}/>
                <img alt="" src={instagram}/>
                <img alt="" src={facebook}/>
                <img alt="" src={facebook}/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
