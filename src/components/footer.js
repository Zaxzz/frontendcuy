import React from "react";
import PPLG from "./asset/PPLG.png"
import FB from "./asset/fb.png"
import IG from "./asset/ig.png"
import TW from "./asset/tw.png"
import YT from "./asset/yt.png"


const Footer = () => {
    return (
        <div id="footer">
            <footer className="footer p-10 bg-green text-black">
  <div>
    <span className="footer-title">Services</span> 
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
<footer className="footer px-10 py-4 border-t bg-white text-black">
  <div className="items-center grid-flow-col">
   <img className="btn bg-white border-none py-3 hover:bg-transparent" src={PPLG}/>
    <p className="font-bold">TIM PPLG <br/>Kelompok 2</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <ul className="menu menu-horizontal p-0">
      <div class="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={FB}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={TW}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={IG}/>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <img className="w-full h-full" src={YT}/>
      </div>
      </ul>
    </div>
  </div>
</footer>
        </div>
    );
} 

export default Footer;