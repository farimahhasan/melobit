import React , {useState, useEffect}  from 'react';
import { getLatestSong } from '../services/api';
import Top from './Top';


const Newsongs = () => {

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
       <div>
        <Top title="New Songs" state={newSongs}/>
        </div>
    );
}

export default Newsongs;