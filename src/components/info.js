import Infoi1 from "./asset/info1.png"
import Infoi2 from "./asset/info2.png"
import Infoi3 from "./asset/info3.png"

const Info = () => {
    return   ( 
        <div id="info">
  <div className="grid h-32 bg-green bg-opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
    <h1 className="text-5xl ">
      Info
    </h1>
    <p className="">
    Berisi riwayat kegiatan yang bersangkutan
    </p>
    <h1 className="mb-2">
    dengan jurusan PPLG
    </h1>
  </div>
      
        <div className="py-10 px-9 grid grid-cols-3 gap-4" >
        <div className="card w-96 bg-white ">
  <figure><img className="shaadow-none" src={Infoi1} alt="Shoes" /></figure>
  <div className="card-body ml-8">
  <a href={"https://bda.co.id/"}>
  <h2 className="card-title underline text-green1">PT Bodha </h2>
    <div className="mt-5">
    <p>PT Bodha </p> 
    <p> Membutuhkan 25 Frontend</p>
    <p>dari SMKN 2 MGL</p>
    </div>
    </a>
  </div>
</div>
{/* kotak */}
<div className="card w-96 bg-white ">
  <figure><img className="shadow-none" src={Infoi2} alt="Shoes" /></figure>
  <div className="card-body ml-8">
    <a href="https://www.bukalapak.com/p/rumah-tangga/home-stuff/c4zs1w-jual-mahkota-girl-mahkota-bulu-crown-bridal-shower-mahkota-birthday">
    <h2 className="card-title underline text-green1">PT Mahkota Girl </h2>
    <div className="mt-5">
    <p >PT Mahkota Girl </p>
    <p> Membutuhkan 25 Frontend</p>
    <p>dari SMKN 2 MGL</p>
    </div>
    </a>
  </div>
</div>
{/* kotak */}
<div className="card w-96 bg-white ">
  <figure><img className="shadow-none" src={Infoi3} alt="Shoes" /></figure>
  <div className="card-body ml-8">
    <a href="https://carakan.id/">
    <h2 className="card-title underline text-green1">PT Carakan</h2>
    <div className="mt-5">
    <p >PT Carakan</p>
    <p> Membutuhkan 5 UI/UX </p>
    <p>dari SMKN 2 MGL</p>
    </div>
    </a>
  </div>
</div>
</div>
</div>

    ); 
}

    export default Info;