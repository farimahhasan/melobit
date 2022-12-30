// import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {Route, Routes} from 'react-router-dom';
import Scrolltop from "./components/Scrolltop";


function App() {
  return (
    <div>
      <Scrolltop/>
      {/* <Header /> */}

      <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
