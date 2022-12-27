import axios from "axios";


const getSlider= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/slider/latest');
    return response.data.results;
}
const getLatestSong= async() =>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/new/0/3');
    return response.data.results;
}



export {getSlider , getLatestSong}