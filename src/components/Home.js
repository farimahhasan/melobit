import React from 'react';
import Carousel from "./Carousel";
import Newsongs from './Newsongs';
import Topdaysong from './Topdaysong';
import Topweeksong from './Topweeksong';
import Trendingartists from './Trendingartists';
import Header from './Header';
const Home = () => {
    return (
        <div>
            <Header />
            <Carousel/>
            <Newsongs/>
            <Trendingartists/>
            <Topdaysong/>
            <Topweeksong/>
        </div>
    );
}

export default Home;