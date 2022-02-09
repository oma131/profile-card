import React from "react";
import About from "./components/About";
import Info  from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import './style.css';

 function App() {
  return (
        <div className="main-body">
            <About/>
            <Info/>
            <Interests/>
            <Footer/>
        </div>
  );
}

export default App;
