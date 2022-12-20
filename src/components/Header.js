import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from "../images/logo.svg";
import search from "../images/search.svg"

function Header() {
    return (
        <header >
            <div className='container-fluid mt-4'>
            <div className='row align-items-center'>
                <div className='col-3'>
                   
                    <h1> <img src={logo} alt="logo icon" /> melobit </h1>
                </div>
                <div className='col-6 text-center'>
                    <nav>
                        <ul className='m-0 p-0'>
                            <li className='d-inline-block mx-2'><a  className='text-decoration-none' href="#">Home</a></li>
                            <li className='d-inline-block mx-2'><a className='text-decoration-none' href="#">Playlist</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='col-2 text-end ' dir='rtl'>
                    <div id='searchDiv' className='d-flex align-items-center justify-content-between' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={search} alt="search icon" /> <span dir='ltr'>search ...</span> </div>
                </div>
                <div className='col-1'>
                    <button>login</button>
                </div>


            </div>
            </div>


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header" dir='rtl'>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body overflow-hidden">
                    <div id='boxSearch' className='d-flex justify-content-between align-items-center'>
                       <input type="text" className='px-3' placeholder='type here to search' />
                       <img src={search} alt="search icon" className='mx-3'/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;