import React from "react";
import NavBar from "./pages/components/NavBar";
import Home from "./pages/Home";
import News from "./pages/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/general' element={<News key="general" active="general"/>}/>
            <Route exact path='/business' element={<News key="business" active="business"/>}/>
            <Route exact path='/entertainment' element={<News key="entertainment" active="entertainment"/>} />
            <Route exact path='/sports' element={<News key="sports" active="sports"/>} />
            <Route exact path='/health' element={<News key="health" active="health"/>} />
            <Route exact path='/science' element={<News key="science" active="science"/>} />
            <Route exact path='/technology' element={<News key="technology" active="technology"/>} />
        </Routes>
    </Router>
    </>
  );
}
