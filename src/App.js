import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
 

// import Contact from "./components/Contact";



function App() {
  return (
    <div className=" ">
      
        <Router>
        <Header/>
        
          <Routes>
      
            <Route path="/react-digital-portfolio" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
              
          </Routes>
        </Router>
    

      <div className="row">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
