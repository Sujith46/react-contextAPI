import React, {useContext, useState} from 'react';
import {MovieContext} from './MovieContext';
import { Paper, Zoom } from '@material-ui/core';

const Movie = ({name, price, id}) => {
    const [movies, setMovies] = useContext(MovieContext)
    console.log('movie', movies)
    const deleteMovie = (id) => {
        const deleted  = movies.filter((val) => val.id !== id)
        setMovies(deleted)
        console.log('del', deleted)
    }

    return(
        <>  
             <Zoom in={true}>
                <Paper elevation={2} className="paperStyle" onClick={() => deleteMovie(id)}>
                        <h3 >{name}</h3>
                        <p>{price}</p>
                </Paper>
            </Zoom>
        </>
    );
}

export default Movie;