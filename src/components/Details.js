import {useParams} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import axios from "axios";

function Details() {
    const params = useParams();
    console.log(params.id);
    const [song,setSong]=useState([])
    useEffect(()=>{
        const fetchAPI= async () =>{
        await axios.get(`https://api-beta.melobit.com/v1/song/${params.id}`)
        .then (response => {
            console.log(response.data)

            setSong(response.data)
        })}
        fetchAPI();
  },[])
    return (
        <div>
            
        </div>
    );
}

export default Details;