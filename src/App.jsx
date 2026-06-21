import Navbar from "./components/Navbar.jsx"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import products from "./data.js";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar /> 
      <Routes>
        <Route path="/" element={ <Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes> 
      </BrowserRouter>
         
    </>
  )
}

export default App
