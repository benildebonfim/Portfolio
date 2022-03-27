import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/portfolio';
import Works from './components/works/works';
import Testemunhos from './components/testemunhos/testemunhos';
import Contato from './components/contato/contato';
import './app.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu";



function App() {
  const[menuOpen,setMenuOpen] = useState (false);
  return (
    <div className="app">
     
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">
       
          <Intro/>

          <Portfolio/>

          <Works/>

          <Testemunhos/>

          <Contato/>


      </div>

    </div>
  );
}

export default App;
