import React from "react";
import { Link } from "react-scroll";

const Button1 = () => {
    return (
      <div className="relative">
        <div className="">
            <div className="text-black flex-none text-center bg-green">
          <ul className="menu menu-horizontal p-0">
           <li><Link to="landing" className="bg-green text-black active hover:bg-green1" smooth={true} duration={1000}>Beranda</Link></li>
            <li><Link to="profil" className="hover:bg-green1" smooth={true} duration={1000}>Profil</Link></li>
            <li><Link to="program" className="hover:bg-green1" smooth={true} duration={1000}>Program</Link></li>
            <li><Link to="about" className="hover:bg-green1" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="galeri" className="hover:bg-green1" smooth={true} duration={1000}>Galeri</Link></li>
            <li><Link to="info" className="hover:bg-green1" smooth={true} duration={1000}>Info</Link></li>      
            <li><Link to="kontak" className="hover:bg-green1" smooth={true} duration={1000}>Kontak</Link></li>
          </ul>
        </div>
        </div>
       </div>
       
    );
}

export default Button1;