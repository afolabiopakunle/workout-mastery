import React, {useState} from 'react';
import {Box} from "@mui/material";
import HeroBanner from "../compoonents/HeroBanner";
import SearchExercises from "../compoonents/SearchExercises";
import Exercises from "../compoonents/Exercises";

function Home(props) {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    );
}

export default Home;