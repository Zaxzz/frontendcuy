import React from 'react';
import Button from './components/button';
import Card from './components/card';
import Navbar from './components/navbar';
import logo from './logo.svg';
import About from './components/about'
import Kontak from './components/kontak';
import Footer from './components/footer';
import Program from './components/program'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Button/>
      <Card/>
      <Kontak/>
      <About/>
       <Program />
      <Footer/>
    </div>
  );
}

export default App;
