import PPLG from "./asset/PPLG.png"
import FB from "./asset/fb.png"
import TW from "./asset/tw.png"
import IG from "./asset/ig.png"
import YT from "./asset/yt.png"
import { Link } from "react-scroll"

const Kontak = () => {
    return (
    <div id="kontak">
       <div>
            <div>
            <h1 className="pt-15 text-5xl text-center text-black py-5 font-bold">Kontak Kami</h1>
                <div className="hero min-h-screen bg-green bg-opacity-100">
                <div className="hero min-h-screen">
    
    <div class="flex space-x-80">
    <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <Link to="landing" smooth={true} duration={1000}><img className="btn bg-green border-none hover:bg-transparent bg-opacity-40" src={PPLG}/></Link>
      <h1 className="pt-10 text-black font-bold">Alamat:</h1>
      <h1 className="pt1 text-black font-bold">Jl. Ahmad Yani, South Kramat, Magelang Utara</h1>
      <h3 className="pt-5 text-black font-bold">Email:</h3>
      <h3 className="pt-1 text-black font-bold">rpl1smkn2@gmail.com</h3>
      <h4 className="pt-5 text-black font-bold">Telepon:</h4>
      <h4 className="pt-1 text-black font-bold">08XX-XXXXXX</h4>

      <ul className="menu menu-horizontal p-0">
      <div class="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <a href={"https://m.facebook.com/profile.php?id=406604126210281"}>
      <img className="w-8 h-8" src={FB} /> </a>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <a href={"https://twitter.com/smkn2magelango"}>
      <img className="w-8 h-8" src={TW}/> </a>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <a href={"https://instagram.com/smkn2magelang.official?igshid=YzdkMWQ2MWU="}>
      <img className="w-8 h-8" src={IG}/> </a>
      </div>
      <div className="btn hover:bg-transparent bg-transparent bg-opacity-40 border-none pt-5 mx-0 hover:scale-150">
      <a href={"https://www.youtube.com/channel/UCM_c-UYNBOEW6oQn9GNmOhA/videos?app=desktop&view=0&sort=da&flow=grid"}>
      <img className="w-8 h-8" src={YT}/> </a>
      </div>
      </ul>
    </div>
</div>

    <div className="shadow-none card flex-shrink-0 w-full max-w-lg shadow-2xl bg-white">
      <div className="card-body">
      <div className="form-control">
          <label className="hero-content font-bold text-3xl text-black text-center label">Pesan
          </label>
      </div>

        <div className="form-control">
          <input type="text" placeholder="Nama" className="bg-grey input input-bordered" />
        </div>

        <div className="form-control">
          <input type="Email" placeholder="Email" className="bg-grey input input-bordered" />
        </div>

        <div className="form-control">
          <input type="text" placeholder="Pesan" className="bg-grey input input-bordered h-40" />
        </div>

        <div className="form-control mt-3 box-border h-10 w-28">
          <div class="absolute bottom-3 right-12 h-16 w-16">
          <button className="btn bg-black text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>         
            </div>
        </div>
    </div>

    );
}

export default Kontak;