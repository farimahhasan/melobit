import React from 'react';
import Carousel from "./Carousel";
import Newsongs from './Newsongs';
import Topdaysong from './Topdaysong';
import Topweeksong from './Topweeksong';
function Home() {
    return (
        <div>
            <Carousel/>
            <Newsongs/>
            <Topdaysong/>
            <Topweeksong/>
        </div>
    );
}

export default Home;