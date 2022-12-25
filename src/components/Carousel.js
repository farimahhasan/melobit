import React,{useState, useEffect} from 'react';
import axios from "axios";
import bgslider1 from '../images/bgslider1.svg'
import bgslider2 from '../images/bgslider2.svg'
import play from '../images/play.svg'
import {Link} from 'react-router-dom';




const Carousel = () => {
     
    const [slider,setSlider]=useState([])
    useEffect(()=>{
        const fetchAPI= async () =>{
        await axios.get(`https://api-beta.melobit.com/v1/song/slider/latest`)
        .then (response => {
            console.log(response.data.results)

            setSlider(response.data.results)
        })}
        fetchAPI();
  },[])
   

    return (
        <>
        <div className='container mt-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-2 icon-music m-0 p-0'>
            <img src={bgslider1} alt="bg"/>
            </div>
            <div className='col-6 m-0 p-0'>


            <div id="carouselExampleControls" className="carousel slide mx-auto" data-bs-ride="carousel">
  <div className="carousel-inner">

<div className="carousel-item active">
        {
          console.log(slider[0].id)
        }
      <img src={slider[0].album.image.cover.url} className="d-block w-100" alt="..." />
      <div className="carousel-caption ">
        <h5><button>
           <Link to={`details/${slider[0].id}`} className='text-decoration-none'>
            Listen now <img src={play} alt="play" />
          </Link> 
         </button></h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider[1].album.image.cover.url}  className="d-block w-100" alt="..." />
      <div className="carousel-caption">
        <h5><button>Listen now <img src={play} alt="play" /></button></h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider[2].album.image.cover.url} className="d-block w-100" alt="..." />
      <div className="carousel-caption">
        <h5><button>Listen now <img src={play} alt="play" /></button></h5>
      </div> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>
            <div className='col-2 icon-music m-0 p-0'>
            <img src={bgslider2} alt="bg"/>
            </div>
          </div>
        </div>


</>
    );
};

export default Carousel;

{/*     {
      slider.map((s)=>{
      <div className="carousel-item active">
        <img src={s.album.image.cover.url} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5><button>Listen now <img src={play} alt="play" /></button></h5>
      </div>
      </div>
      })
    }  */}