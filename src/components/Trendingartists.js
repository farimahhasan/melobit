import React , {useState, useEffect}  from 'react';
import { getTrendingArtists } from '../services/api';


const Trendingartists = () => {

    const [trendingArtists,setTrendingArtists]=useState([])
        
    
   
    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTrendingArtists();
         console.log(data)
         setTrendingArtists(data)
      }
      fetchAPI();
  },[])

    return (
        <div>
             <div  className='mt-5 py-3 trendingA' >
        <div className='container'>
        <div className='row'>
            <div className='col-12 py-2'>
               <h2>Trending Artists</h2>
            </div>
            {
                trendingArtists.map((a)=>(
                    <div className='col-3'>
                    <img src={a.image.cover.url} className='w-100'/>
                    <h6 className='px-3 pt-2'>sum Songs Downloads Count : {a.sumSongsDownloadsCount}</h6>
                    <h6 className='text-white-50 px-3'>{a.fullName}</h6>
                     
                    </div>
                ))
            } 
            </div>
        </div>
    </div>
            
        </div>
    );
};

export default Trendingartists;