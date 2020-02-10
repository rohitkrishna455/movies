//each action is a function
//this fun hav the type and payload and import them into our appln

//here actions create a functions which call API and then fetch the data and getting the data ,so that data to be passed from the action to the reducer
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey'

export const searchMovie = text => dispatch => {
 //we declare action type and payload
 dispatch({
     type: SEARCH_MOVIE,
     payload: text
 });
};

 
//fetching the data from the API
export const fetchMovies = text => dispatch => {
    axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => 
        dispatch({
             type: FETCH_MOVIES,
             payload: response.data
         }))
    .catch(err => console.log(err))
};


export const fetchMovie = id => dispatch => {
    axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => 
        dispatch({
        type: FETCH_MOVIE,
        payload: response.data
    }))
    .catch(err => console.log(err))}

    export const setLoading = () => {
        return{
            type: LOADING
        }
    }