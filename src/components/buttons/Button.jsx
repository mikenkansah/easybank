const Button = ({name}) => {
    return ( 
        <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border border-blue-800 rounded-3xl outline-none text-white py-2 px-5 hover:opacity-[0.7]" type="button">{name}</button>
     );
}

export default Button;
