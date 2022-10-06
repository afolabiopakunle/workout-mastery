import React from 'react';
import {Box} from "@mui/material";
import HeroBanner from "../compoonents/HeroBanner";
import SearchExercises from "../compoonents/SearchExercises";
import Exercises from "../compoonents/Exercises";

function Home(props) {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    );
}

export default Home;