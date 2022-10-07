import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {fetchData, exerciseOptions} from "../utils/fetchData";
import HorizontalScroll from "./HorizontalScroll";

function SearchExercises({setExercises, bodyPart, setBodyPart}) {

    const [search, setSearch] = useState('');
    const [exercises, setExercisesState] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartData])
        }

        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            const searchedExercises = exerciseData.filter((exercise) => {
                return exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
            })
            setSearch('');
            setExercises(searchedExercises)
        }
    }
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
                    onChange={(e)=> setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    defaultValue={search}
                    type='text'
                />
                <Button onClick={handleSearch} className={'search-btn'} sx={{ bgcolor: '#ff2625', color: 'white', height: '56px',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'}}} >
                    Search
                </Button>
            </Box>
            <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
                <HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
}

export default SearchExercises;