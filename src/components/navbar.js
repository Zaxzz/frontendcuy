import PPLG from "./asset/PPLG.png"

const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-white">
  <div className="flex-1">
    <img className="btn bg-white border-none py-3 hover:bg-transparent" src={PPLG}/>
    <h1 className="btn hover:bg-transparent bg-white border-none font-bold text-black text-base">PENGEMBANGAN PERANGKAT LUNAK dan GIM</h1>
    <h2>Leading and Advanced Majors</h2>
  </div>
  <div className="form-control">
  <div className="input-group">
    <input type="text" stroke="bg-green" placeholder="Search…" className="border-solid border-2 border-green bg-white input input-bordered" />
    <button className="btn hover:bg-transparent border-none btn bg-green">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>
  <div className="text-black flex-none text-center bg-green">
          <ul className="menu menu-horizontal p-0">
            <li><a>Beranda</a></li>
            <li><a>Profil</a></li>
            <li><a>Program</a></li>
            <li><a>About</a></li>
            <li><a>Galeri</a></li>
            <li><a>Kontak</a></li>
            <li tabIndex={0}>
              <a>
                Info
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-green">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
    );
}

export default Navbar;