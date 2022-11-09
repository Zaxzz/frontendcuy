const Galeri = () => {
    return (
      <div className="bg-white">
       <div className="grid h-32 bg-green opacity-40 text-center rounded-none rounded-bl-lg rounded-tr-lg place-items-center text-black font-bold  text-opacity-100">
    <h1 className="text-5xl ">
      Galeri
    </h1>
  </div>
      <div className="bg-white">
        <div className='max-w-[1200px] mx-auto py-10 pt-2 px-4 text-center '>
          <div className='grid grid-rows-none md:grid-cols-3 py-5 gap-2 md:gap-12'>
            <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
             <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
             <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
             <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
             <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
             <img className="w-full h-full object-cover hover:scale-105" src="https://placeimg.com/400/300/arch" alt="Burger"/>
      </div>
      
      </div>
      </div>
  </div>
    );
}

export default Galeri;