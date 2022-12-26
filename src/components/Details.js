import {useParams} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import play from '../images/play.svg'
import download from "../images/download.svg"
import share from "../images/share.svg"
// import { getDetails } from '../services/api';
import axios from "axios";

function Details() {
   const params = useParams();
    console.log();
    const [song,setSong]=useState({})
  



    
    // const getDetails= async() =>{
    //     const response=await axios.get(`https://api-beta.melobit.com/v1/song/{${params.id}}`);
    //     return response.data;
    // }

    // useEffect(()=>{

    //     const fetchAPI= async () =>{
    //        const data=await getDetails();
    //        console.log(data)
    //        setSong(data)
    //     }
    //     fetchAPI();
    // },[])
    // useEffect(()=>{
    //     const getDetails= async() =>{
    //         const response=await axios.get(`https://api-beta.melobit.com/v1/song/${id}}`);
    //         return response.data;
    //     }
    //     const fetchAPI= async () =>{
    //         const data=await getDetails();
    //         console.log(data)
    //     console.log(getDetails())
    //         setSong(data)
    //      }
    //      fetchAPI();
        
    // },[])


        useEffect(()=>{
            const fetchAPI= async () =>{
           await axios.get(`https://api-beta.melobit.com/v1/song/${params.id}`)
           .then (response => {
                console.log(response.data)
                setSong(response.data)})
           }
           fetchAPI();
       },[])

    return (
        <div id='details' className='container-fluid mt-5'>

              <div className='row justify-content-center'>
                <div className='col-11'>
                   {/* <img className='w-100' src={song.image.slider.url}  alt='..'/> */}
                </div>
            </div> 
            <div className='row justify-content-center mt-4 '>
                <div className='col-2'>
                    <p dir='rtl'  className="p-0 m-0">
                        {song.lyrics}
                    </p>
                </div>
                 <div className='col-3 '>
                <button className='me-3' >Download &nbsp; <img src={download} alt="download icon" /></button>
                <button>Share &nbsp; <img src={share} alt="share icon" /></button>

                </div>
                <div className='col-2'>
                    <p className="p-0 m-0">
                        {/* {song.album.artists.fullName} */}
                        <br/>
                        {song.title}
                    </p>
                </div>
                <div className='col-3 text-center'>

                    <div className='top-cart'>
                        {/* <img className='rounded-circle' src={song.album.image.cover.url} alt={song.title}/> */}
                    </div>
                    <div className='bottom-cart text-start'>
                            <h6>{song.title}</h6>
                            {/* <h6>{song.album.artists.fullName}</h6> */}
                             <div className='play text-center'>
                             <img src={play} alt="play" /> 
                             </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Details;