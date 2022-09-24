import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
     <picture>
        <img src={logo} alt=""/>
     </picture>
     <div className="justify-self-center">
        <ul className="flex ">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
     </div>

     <button type="button">Send a message</button>
    </nav>
  );
};

export default Navbar;
