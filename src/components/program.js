import Program1 from"./asset/program1.png"
import Program2 from"./asset/program2.png"


const Program = () => {
    return   (
      
    <div id="program">
  <div className="grid h-32 bg-green bg-opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
    <h1 className="text-5xl ">
      Program
    </h1>
    <p className="">
    Berisi riwayat kegiatan yang bersangkutan
    </p>
    <h1 className="mb-2">
    dengan jurusan PPLG
    </h1>
  </div>

        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
{/* kotak*/}
<div className="flex space-x-36 px-11">
        <div className="card w-100 bg-green bg-opacity-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={Program1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <a href={"https://smkn2mgl.sch.id/category/news-skanida"}>
    <h2 className="hover:underline card-title font-bold text-black text-2xl">PELATIHAN MARKET PLACE</h2> </a>
    <p className="text-black">Siswa kompetensi keahlian PPLG (Perkembangan Perangkat Lunak Gim) mendapatkan Pelatihan Pembuatan Project Market Pleace dengan Pembicara MR.Jack</p>
    
  </div>
</div>
{/* kotak */}
<div className="card w-100 bg-green bg-opacity-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Program2} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <a href={"https://smkn2mgl.sch.id/category/kabar-skanida"}>
    <h2 className="hover:underline card-title font-bold text-2xl text-black">KUNJUNGAN BOS BESAR PT.BODHA</h2> </a>
    <p className="text-black">Siswa kompetensi keahlian PPLG (Perkembangan Perangkat Lunak Gim) mendapatkan pengarahan industri oleh PT Bodha Dharmajaya Aryadhana (BDA)....</p>
    
  </div>
</div>
</div>
        </div>
      </div>
      </div>
    
   


     );
}

export default Program;