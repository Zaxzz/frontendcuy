import React from 'react';
import Button from './components/button';
import Navbar from './components/navbar';
import logo from './logo.svg';
import About from './components/about'
import Kontak from './components/kontak';
import Footer from './components/footer';
import Program from './components/program'
import Profil from './components/profil';
import Galeri from './components/galeri';
import Info from './components/info';
import Landing from './components/landing';

const App = () => {
  return (
    <div className=' object-cover text-cover'>
       <div className='border-b-2 border-black fixed w-full z-40'>
      <Navbar/>
      <Button/>
      </div>
      <Landing/>

      <div className="content bg-fixed bg-white" style={{backgroundImage: `url("https://i.top4top.io/p_2502kji0f1.png")`}}>
      <Profil/>
      
      <Program/>
    
      <About/>
    
      <Galeri/>
      
      <Info/>
    
      <Kontak/>
      
      <Footer/>
    
     </div>
    </div>
  );
}

export default App;
