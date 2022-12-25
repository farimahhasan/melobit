import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Details from "./components/Details";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />

      <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Carousel/>} />
      </Routes>

    </div>
  );
}

export default App;
