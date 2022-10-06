import React, {useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

function SearchExercises(props) {

    const [search, setSearch] = useState('')
    return (
        <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
            <Typography fontWeight={700} sx={{
                fontSize: {lg: '44px', xs: '30px' }
            }} mb={'50px'} textAlign={'center'}>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position={'relative'} mb={'72px'}>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '400px'},
                        width: {lg: '800px', xs: '350px'},
                        backgroundColor: '#fff',
                        outline: 'none',
                        borderRadius: '140px'
                    }}
                    height='76px'
                    onChange={(e)=> {}}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className={'search-btn'} sx={{ bgcolor: '#ff2625', color: 'white', height: '56px',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'}}} >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

export default SearchExercises;