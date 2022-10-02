import logo from '../assets/logo.svg';
import Button from './buttons/Button';


const Navbar = () => {
  return (
    <nav className="navbar flex justify-between py-4 px-10 border shadow-lg bg-white shadow-slate-300 box-border relative z-[20]">
     <picture className="pt-3">
        <img src={logo} alt=""/>
     </picture>
     <div className=" text-lg mx-10 pt-2 hidden md:block">
        <ul className="flex md:gap-x-20 ">
            <li className="hover:underline underline-offset-[1.6rem] cursor-pointer decoration-4 decoration-green-600" >Home</li>
            <li className="hover:underline underline-offset-[1.6rem] cursor-pointer decoration-4 decoration-green-600">About</li>
            <li className="hover:underline underline-offset-[1.6rem] cursor-pointer decoration-4 decoration-green-600">Contact</li>
            <li className="hover:underline underline-offset-[1.6rem] cursor-pointer decoration-4 decoration-green-600">Blog</li>
            <li className="hover:underline underline-offset-[1.6rem] cursor-pointer decoration-4 decoration-green-600">Careers</li>
        </ul>
     </div>
    <Button name="Request Invite"/>
    </nav>
  );
};

export default Navbar;
