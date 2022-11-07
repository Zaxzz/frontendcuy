const Button = () => {
    return (
      <div>
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
          <div className="hero min-h-screen bg-base-200">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="opacity-70 rounded-none rounded-tr-lg rounded-bl-lg card w-full shadow-2xl bg-green">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-5x1 text-white">PENGEMBANGAN PERANGKAT LUNAK DAN GIM</span>
            </label>
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

export default Button;