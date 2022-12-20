import React,{useState, useEffect} from 'react';
import axios from "axios";

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


        <div id="carouselExampleControls" className="carousel slide mx-auto" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider[0].album.image.cover.url} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider[1].album.image.cover.url}  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider[2].album.image.cover.url} className="d-block w-100" alt="..." />
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
</>
    );
};

export default Carousel;