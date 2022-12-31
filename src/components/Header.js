import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js'

import logo from "../images/logo.svg";
import search from "../images/search.svg";



import {Link} from 'react-router-dom';


const Header= () => {


//     const[searchInput,setSearch]=useState("");
//     const[searchResult,setsearchResult]=useState([]) 

//     const saveSearchHandeler= event=>{
//         setSearch(event.target.value)
    
//     }

//    const clearInput=()=>{
//     setSearch("")
//    }

//    const searchHandler=async ()=>{
//         console.log("Search: " + searchInput) 

//         await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/5`)
//         .then (response => {
//             console.log(response.data.results)
//             setsearchResult(response.data.results)
//      })}


  

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
                            <li className='d-inline-block mx-2'>
                                <Link to="/" className='text-decoration-none'>Home</Link>
                            </li>
                            <li className='d-inline-block mx-2'>
                                <a className='text-decoration-none' href="#">Playlist</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-2 text-end ' dir='rtl'>
                    {/* <div id='searchDiv' className='d-flex align-items-center justify-content-between' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={search} alt="search icon" /> <span dir='ltr'>search ...</span> </div> */}
                  <Link to="/search"className='text-decoration-none'><div id='searchDiv' className='d-flex align-items-center justify-content-between' ><img src={search} alt="search icon" /> <span dir='ltr'>search ...</span> </div> </Link>  
                  </div>
                <div className='col-1'>
                    <button>login</button>
                </div>


            </div>
            </div>


            {/* <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header" dir='rtl'>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={clearInput}></button>
                </div>
                <div className="offcanvas-body overflow-hidden">
                    <div id='boxSearch' className='d-flex justify-content-between align-items-center'>
                       <input type="text" className='px-3' placeholder='type here to search' value={searchInput} 
                      
                      onChange={saveSearchHandeler} 
                       />
                       <img src={search} alt="search icon" className='mx-3' onClick={searchHandler} />
                    </div>

              
       
             
                   <Cartsearch stateResult={searchResult} />


                </div>
            </div> */}
        </header>
    );
}

export default Header;