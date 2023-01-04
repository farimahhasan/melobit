import React , {useState, useEffect}  from 'react';
import { getTopDaySong } from '../services/api';
import Top from './Top';

const Topdaysong = () => {
    const [topDaySong,setTopDaySong]=useState([])

    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTopDaySong();
         setTopDaySong(data)
      }
      fetchAPI();
  },[])
    return (
        <div>
            <Top title="Top Songs Of The Day" state={topDaySong}/>
        </div>
    );
};

export default Topdaysong;