import PakWildan from './asset/pakWildan.jpg'
import PakAhmad from './asset/pakAhmad.jpg'
import BuApido from './asset/buApido.jpg'
import BuViccky from './asset/buViccky.jpg'
import PakWintolo from './asset/pakWintolo.jpg'
import PakArifin from './asset/pakArifin.jpg'
import PakYunus from './asset/pakYunus.jpg'
import BuYekti from './asset/buYekti.jpg'

const Galeri = () => {
    return (
      <div id="galeri">
        <div className="grid h-32 bg-green bg-opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
        <h1 className="text-5xl ">Galeri</h1>
        <h2 className='mb-2'>Berisi Guru Pengajar Dan Pembimbing PPLG</h2>
      </div>

      <div className="py-14 px-20 grid grid-cols-4 gap-4" > 
        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Ahmad Wildan Listyanto S.Pd</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={PakWildan} alt="Apido Yuliana ST.M.Eng" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Ahmad Sayefudin S.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={PakAhmad} alt="Apido Yuliana ST.M.Eng" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-11 py-36 text-black text-center">Wintolo S.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={PakWintolo} alt="Wintolo S.Kom" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Arifin Andi Gunawan S.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={PakArifin} alt="Arifin Andi Gunawan S.Kom" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Yunus Adi Wibowo S.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={PakYunus} alt="Yunus Adi Wibowo S.Kom" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Viccky Listyaningsih M.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={BuViccky} alt="Viccky Listyaningsih M.Kom" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Apido Yuliana ST.M.Eng</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={BuApido} alt="Apido Yuliana ST.M.Eng" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>

        <label className="swap swap-flip">
          <input type="checkbox" />
          <div className="swap-on">
            <div className="card card-compact h-80 w-56 bg-gray-100 outline-double outline-black">
              <h2 className="card-title px-4 py-32 text-black text-center">Yekti Utari Winarni M.Kom</h2>
            <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="swap-off">
            <div className="card card-compact w-56">
              <figure><img src={BuYekti} alt="Yekti Utari Winarni M.Kom" className="rounded-2xl"/></figure>
              <div className="card-body"></div>
            </div>
          </div>
        </label>
      </div>
        
      </div>
      
    );
}

export default Galeri;