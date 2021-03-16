import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';
import { FormControl, TextField, Button} from '@material-ui/core';
import "./global.scss";

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(1);
    const[movie, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setId( id + 1);
        setMovies(prev => [...prev, {name: name, price: price, id: id}])
    }

    return (
        <FormControl onSubmit={addMovie}>
            <TextField className="textStyle" name="name" placeholder="Enter movie name" onChange={updateName}></TextField>
            <TextField className="textStyle" name="price" placeholder="Enter price" onChange={updatePrice}></TextField>
            <Button className="btnSubmit" onClick={addMovie} variant="contained" color="primary">Submit</Button>
        </FormControl>
        // <form onSubmit={addMovie}>
        //     <input type="text" name="name" value={name} onChange={updateName}></input>
        //     <input type="text" name="price" value={price} onChange={updatePrice}></input>
        //     <button>Submit</button>
        // </form>
    )
}

export default AddMovie;