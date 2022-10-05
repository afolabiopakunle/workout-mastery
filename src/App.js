import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./compoonents/Navbar";


function App(props) {
    return (
        <Box width='400px'>
           <Navbar />
           <Routes>
               <Route path='/' element={<Home />} />
               <Routes path='/exercise/:id' element={<ExerciseDetail />} />
           </Routes>
        </Box>
    );
}

export default App;