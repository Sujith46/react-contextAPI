import React, { useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'
import { Grid } from '@material-ui/core'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    // console.log('key', movies.map(el => el.id))
    return(
        <>
       
            <Grid 
                container   
                direction="row"
                justify="center"
                alignItems="center" 
                className="gridLayout textStyle"
                >

                    {movies.map(movie =>(
                        <Movie name={movie.name} price={movie.price} key={movie.id} id={movie.id}/>
                    ))}

            </Grid>
        </>
    );
}

export default MovieList;