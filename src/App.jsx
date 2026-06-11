import Navbar from "./Component/Navbar"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import About from "../src/Pages/About";
import Service from "./Pages/Service";
import products from "./data.js";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar /> 
      <Routes>
        <Route path="/" element={ <Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        </Routes> 
      </BrowserRouter>
         
    </>
  )
}

export default App
