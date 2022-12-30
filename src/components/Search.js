import React,{useState} from 'react';
import axios from "axios";
import search from "../images/search.svg";
import Cartsearch from './Cartsearch';


const Search = () => {

    const[searchInput,setSearch]=useState("");
        const[searchResult,setsearchResult]=useState([]) 
    
        const saveSearchHandeler= event=>{
            setSearch(event.target.value)
        
        }
    
       const clearInput=()=>{
        setSearch("")
       }
    
       const searchHandler=async ()=>{
            console.log("Search: " + searchInput) 
    
            await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/5`)
            .then (response => {
                console.log(response.data.results)
                setsearchResult(response.data.results)
         })}
    
    return (
        <div className='position-relative h-100 offcanvas1'>

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={clearInput}></button>

                <div className="offcanvas-body overflow-hidden">
                    <div id='boxSearch' className='d-flex justify-content-between align-items-center'>
                       <input type="text" className='px-3' placeholder='type here to search' value={searchInput} 
                      
                      onChange={saveSearchHandeler} 
                       />
                       <img src={search} alt="search icon" className='mx-3' onClick={searchHandler} />
                    </div>

              
       
             
                   <Cartsearch stateResult={searchResult} />


             
             </div>
             </div>


    );
};

export default Search;