import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between py-4 px-10 border shadow-lg shadow-indigo-500/10 box-border">
     <picture>
        <img src={logo} alt=""/>
     </picture>
     <div className="justify-self-center text-lg ">
        <ul className="flex gap-x-20  ">
            <li className="hover:underline underline-offset-[2.14rem] cursor-pointer decoration-4 decoration-green-600" >Home</li>
            <li className="hover:underline underline-offset-[2.14rem] cursor-pointer decoration-4 decoration-green-600">About</li>
            <li className="hover:underline underline-offset-[2.14rem] cursor-pointer decoration-4 decoration-green-600">Contact</li>
            <li className="hover:underline underline-offset-[2.14rem] cursor-pointer decoration-4 decoration-green-600">Blog</li>
            <li className="hover:underline underline-offset-[2.14rem] cursor-pointer decoration-4 decoration-green-600">Careers</li>
        </ul>
     </div>
     <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border border-blue-800 rounded-3xl outline-none text-white py-2 px-5"type="button">Request Invite</button>
    </nav>
  );
};

export default Navbar;
