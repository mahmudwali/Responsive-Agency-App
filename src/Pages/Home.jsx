import React from 'react';
import Hero from '../components/Hero';
import Brand from '../components/Brand';
import WorkList from './../components/WorkList';
import Stats from '../components/Stats';
import FeatureProject from '../components/FeatureProject';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <>
            <Hero/>
            <Brand/>
            <WorkList/>
            <Stats/>
            <FeatureProject/>
            <Subscribe/>
        </>
    );
};

export default Home;