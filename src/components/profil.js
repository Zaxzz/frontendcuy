import Profil1 from "./asset/profil.png"

const Profil = () => {
    return (
    
<div id="profil">
         <div className="flex flex-col w-full">
  <div className="grid h-32 bg-green bg-opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
    <h1 className="text-5xl ">
      Profil
    </h1>
    <h2 className="mb-2">
      Berisi tentang apa itu PPLG
    </h2>
  </div>
        <div className="px-14 hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Profil1} className="hover:scale-105 max-w-sm rounded-lg " />
          <div>
            <h1 className=" text-5xl font-bold text-black underline decoration-green"> APA ITU PPLG?</h1>
            <p className="py-6 text-black">     RPL/PPLG adalah sebuah jurusan yang mempelajari dan mendalami semua cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.</p>
     <p className="text-black"> Intinya RPL/PPLG tidak akan jauh-jauh dari tiga hal yaitu Coding, Desain dan Algoritma yang akan menjadi kunci keberhasilan rekayasa perangkat lunak tersebut.</p>
          </div>
        </div>
      </div>
      </div>
     </div>
 
    );
}

export default Profil;