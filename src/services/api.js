import axios from "axios";


const getSlider= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/slider/latest');
    return response.data.results;
}


export {getSlider}