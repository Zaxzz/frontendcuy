import React from "react";
import PPLG from "./asset/PPLG.png"
import FB from "./asset/fb.png"
import IG from "./asset/ig.png"
import TW from "./asset/tw.png"
import YT from "./asset/yt.png"
import { Link } from "react-scroll";


const Footer = () => {
    return (
        <div id="footer">
            <footer className="footer p-10 bg-white text-black">
            <div className="items-center grid-flow-col">
    <Link to="landing" smooth={true} duration={1000}><img className="btn bg-white border-none py-3 hover:bg-transparent" src={PPLG}/></Link>
    <p className="font-bold">TIM PPLG <br/>Kelompok 2</p>
  </div> 
  <div>
    <span className="footer-title text-black text-opacity-100">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
        </div>
    );
} 

export default Footer;