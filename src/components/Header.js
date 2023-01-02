import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import {Link} from 'react-router-dom';


const Header= () => {
    return (
        <header >
            <div className='container-fluid mt-4'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md-3 col-sm-6 col-6 '>
                   
                    <h1 className='fs-sm-1 fs-1'> <img src={logo} alt="logo icon" /> melobit </h1>
                </div>
                <div className='col-md-6 col-sm-6 col-6 text-md-center text-sm-end text-end'>
                    <nav>
                        <ul className='m-0 p-0'>
                            <li className='d-inline-block mx-2'>
                                <Link to="/" className='text-decoration-none'>Home</Link>
                            </li>
                            <li className='d-inline-block mx-md-2 ms-sm-2 ms-2'>
                                <a className='text-decoration-none' href="/">Playlist</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-md-2 col-sm-6 col-6 text-end order-md-3 order-sm-4 order-4' dir='rtl'>
                  <Link to="/search"className='text-decoration-none '><div id='searchDiv' className='d-flex align-items-center justify-content-between' ><img src={search} alt="search icon" /> <span dir='ltr'>search ...</span> </div> </Link>  
                  </div>
                <div className='col-md-1  col-sm-6 col-6 text-endorder-md-4 order-sm-3 order-3'>
                    <button>login</button>
                </div>


            </div>
            </div>

        </header>
    );
}

export default Header;