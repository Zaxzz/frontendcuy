import { Link } from "react-scroll";
import PPLG from "./asset/PPLG.png"

const Navbar = () => {
    return (
      <div id="navbar">
        <div className="navbar bg-white">
  <div className="flex-1">
  <Link to="landing" className="hover:bg-transparent" smooth={true} duration={1000}> <img className="btn bg-white border-none py-3 hover:bg-transparent" src={PPLG}/></Link>
    <div className="flex  flex-col">
    <Link to="landing" className="hover:bg-transparent" smooth={true} duration={1000}> <div className="btn hover:bg-transparent bg-white border-none font-bold text-black text-base pb-0">PENGEMBANGAN PERANGKAT LUNAK dan GIM</div></Link>
    <div className="pt-0 ml-4 text-black">Leading and Advanced Majors</div>
    </div>
  </div>
  <div className="form-control">
  <div className="input-group">
    <div type="text" stroke="bg-green" placeholder="Search…" className="w-56 border-solid border-2 border-green bg-white input input-bordered"></div>
    <button className="btn hover:bg-green1 border-none  bg-green">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>

 </div>
    );
}

export default Navbar;