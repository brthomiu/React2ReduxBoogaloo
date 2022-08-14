import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";


function App() {

    //const dispatch = useDispatch();

    return (
        <>
          <Router>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/music' element={<Music />} />
            </Routes>
          </div>
        </Router>
      </>
    );
}

export default App