import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';


function HeroBanner(props) {
    return (
        <Box sx={{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }} position={'relative'} p={'20px'}>
            <Typography color={'#FF2625'} fontWeight={'600'}>
                Fitness Club
            </Typography>
            <Typography fontWeight={'700'} sx={{
                fontSize: {lg: '44px', xs: '36px'}
            }} mb='23px' mt='30px'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight={'35px'} mb={3}>
               Checkout the most effective exercises
            </Typography>
            <Button href='#exercises' variant={'contained'} color={'error'}>Explore Exercises</Button>
            <Typography fontWeight={600} color={'#FF2625'} sx={{ display: {lg: 'block', xs: 'none'},
                opacity: '0.1', fontSize: '200px'}}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className={'hero-banner-img'}/>
        </Box>
    );
}

export default HeroBanner;