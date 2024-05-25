import React from 'react';
import './App.css';
import {NavBar} from
      "./view/Navbar/NavBar";
import {MainContent} from "./view/MainContent/MainContent";
import {Footer} from "./view/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
