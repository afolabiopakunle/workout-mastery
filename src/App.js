import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./compoonents/Navbar";
import Footer from "./compoonents/Footer";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";


function App(props) {
    return (
        <Box width='400px' sx={{ width: {xl: '1488px'} }} m='auto'>
           <Navbar />
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/exercise/:id' element={<ExerciseDetail />} />
           </Routes>
           <Footer />
        </Box>
    );
}

export default App;