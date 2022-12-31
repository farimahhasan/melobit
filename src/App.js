// import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header";
import {Navigate, Route, Routes} from 'react-router-dom';
import Cartsearch from "./components/Cartsearch";



function App() {
  return (
    <div>
      <Header /> 

      <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="search/details/:id" element={<Details />} />
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Cartsearch/>} />
          
      </Routes>

    </div>
  );
}

export default App;
