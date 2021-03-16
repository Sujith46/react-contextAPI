import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import { AppBar, Typography, Container } from '@material-ui/core';
import './global.scss';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <>
            <AppBar position="static" color="secondary" className="navbar">
                <Container maxWidth="sm">
                    <Typography variant="h5" className="header">
                        Movie List Creator
                    </Typography>
                </Container>
            </AppBar>
            <Typography variant="h5" color="primary" className="subHeading">Total Movies: {movies.length}</Typography>
        </>
    );
}

export default Nav;