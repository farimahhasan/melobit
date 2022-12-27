import React , {useState, useEffect}  from 'react';
import { getLatestSong } from '../services/api';


function Newsongs() {

    const [newSongs,setNewSongs]=useState([])
        
    
   
    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getLatestSong();
         console.log(data)
         setNewSongs(data)
      }
      fetchAPI();
  },[])

    return (
        <div id='newSongs' className='mt-5 py-3' >
            <div className='container'>
            <div className='row'>
                <div className='col-12 py-2'>
                   <h2>New Songs</h2>
                </div>
                {
                    newSongs.map((song)=>(
                        <div className='col-4'>
                        <img src={song.album.image.cover.url} className='w-100'/>
                        <h6 className='px-3 pt-2'>{song.album.name}</h6>
                        <h6 className='text-white-50 px-3'>{song.album.artists[0].fullName}</h6>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Newsongs;