import React ,{useState} from 'react';
import play from '../images/play.svg'
import {Link} from 'react-router-dom';
import axios from "axios";
import search from "../images/search.svg";

const Cartsearch=()=>{

  const[searchInput,setSearch]=useState("");
  const[searchResult,setsearchResult]=useState([]) 

  const saveSearchHandeler= event=>{
      setSearch(event.target.value)
  
  }

//  const clearInput=()=>{
//   setSearch("")
//  }

 const searchHandler=async ()=>{
      console.log("Search: " + searchInput) 

      await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/6`)
      .then (response => {
          console.log(response.data.results)
          setsearchResult(response.data.results)
   })}
    return (

      
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-6'>
          <div id='boxSearch' className='w-100 d-flex justify-content-between align-items-center'>
                       <input type="text" className='px-3' placeholder='type here to search' value={searchInput} 
                      
                      onChange={saveSearchHandeler} 
                       />
                       <img src={search} alt="search icon" className='mx-3' onClick={searchHandler} />
                    </div>
          </div>
        </div>
        <div className='row justify-content-center mt-3' >

      {
       searchResult.map((s)=>(
          
            s.type==="song" && 
          
               <div className='col-5 text-center mt-4' key={s.position}>
                <div id='divCartSearch' className='w-100 d-flex align-items-center justify-content-evenly'>
                    <img src={s.song.album.image.cover.url} alt={s.song.album.name.replace('Single' , '')}/>
                   <div>
                     <h6>
                      {s.song.album.name.replace('Single' , '')}
                     
                     </h6>
                    <p>{s.song.album.artists[0].fullName}</p>
                   </div>
                   <Link to={`details/${s.song.id}`} aria-label="Close" className='text-decoration-none'>
                     <img src={play} alt="play icon" />
                    </Link> 
                </div>

               </div>
            
        ))
      }
              </div>

      </div>
        
    
    );
}

export default Cartsearch;