import {useParams} from 'react-router-dom';
import React,{useState, useEffect, useRef} from 'react';
import playAudio from '../images/play.svg'
import pauseAudio from '../images/pause.svg'

import download from "../images/download.svg"
import share from "../images/share.svg"
// import { getDetails } from '../services/api';
import axios from "axios";

function Details() {
   const params = useParams();

    const [song,setSong]=useState([])

    const audioElm=useRef(null);
    const clickRef=useRef(null);

    const [isPlaying,setIsPlaying]=useState(false)

    const [openDownlod,setOpenDownlod]=useState(false)
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
            if(isPlaying){
                audioElm.current.play()
            }
        //                else{
        //     audioElm.current.pause()
        //    }


       },[])
       

       const clickHandler=()=>{
        setIsPlaying(!isPlaying)
    }

    const onPlaying=()=>{
        const duration=audioElm.current.duration;
        const ct=audioElm.current.currentTime;
        setSong({...song,"progress" : ct/duration*100,"length":duration})
    }
    
    const checkWidth=(e)=>{
        let width=clickRef.current.clientWidth;
        const offset=e.nativeEvent.offsetX;
        const divProgress=offset/width*100;
        audioElm.current.currentTime=divProgress/100 * song.length;

    }



    return (
        <div id='details' className='container-fluid mt-5'>

              <div className='row justify-content-center'>
                <div className='col-11'>
                    {
                        song.image && <img className='w-100' src={song.image.slider.url}  alt='..'/>

                    }
                </div>
            </div> 
            <div className='row justify-content-center mt-4 '>
                <div className='col-3'>
                    <p dir='rtl'  className="p-0 m-0">
                        {song.lyrics}
                    </p>
                </div>
                 <div className='col-4 text-center'>
                <div className='row'>
                   <div className='col-6'>
                    <button onClick={()=>setOpenDownlod(true)}  >Download &nbsp; <img src={download} alt="download icon" /></button>
                    {
                        openDownlod && song.audio &&
                        <div className='downlod-high-medium mt-3'>
                        <button><a  className='text-decoration-none' href={song.audio.medium.url} download>with 128 quality</a></button>
                        <button className='mt-3'><a className='text-decoration-none' href={song.audio.high.url} download>with 320 quality</a></button>
                        </div>
                    }
                   </div>
                   <div className='col-6'>
                   <button>Share &nbsp; <img src={share} alt="share icon" /></button>
                   </div>
                </div>


                </div>
{/*                 <div className='col-2'>
               { song.album && 
                    <p className="p-0 m-0">
                           {song.album.artists[0].fullName}
                    
                       
                        <br/>
                        {song.title}
                    </p>
                }
                </div> */}
                <div className='col-3 text-center'>

                    <div className='top-cart'>
                    {song.album &&
                     <img className='rounded-circle' src={song.album.image.cover.url} alt={song.title}/> }
                      
                    </div>
                    <div className='bottom-cart text-center py-2'>
                    {song.artists && <h6 className='pt-3'>{song.artists[0].fullName}</h6> }
                            <h6 className='text-white-50'>{song.title}</h6>
                
                            <div className='progressbar-div mt-3' onClick={checkWidth} ref={clickRef}>
                                <div className='progress-div' style={{width:`${song.progress}%`}}>
                                </div>
                                <div className='row pt-3 justify-content-between duration-ct'>
                                    {/* <div className='col-5  text-dark fw-bold text-start'>{audioElm.current.currentTime.toFixed(0)}s</div>
                                    <div className='col-5  text-dark fw-bold text-end'>{audioElm.current.duration.toFixed(0)}s</div> */}
                                </div>
                            </div>
                           
                             <div className='play text-center mt-5'>
                              <button className='btn-play-pause' onClick={clickHandler}>
                                {
                                
                                    isPlaying ? <img src={pauseAudio} alt="pause" /> :<img src={playAudio} alt="play" /> 
                                }
                              
                              </button>
                             {song.audio &&
                             <audio co src={song.audio.high.url} ref={audioElm} onTimeUpdate={onPlaying}></audio>
                             }
                             </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Details;