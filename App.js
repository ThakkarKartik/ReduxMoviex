import React, { Components } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import mockMovies from './mockMovies'
import Home from './APP/Containers/Home'

function addMovies(state,{movies}){
    return movies.map(movie =>({
        Title: movie.Title,
        Poster: movie.Poster,
        imdbID: movie.imdbID
    }) )
}

function movieReducer(state = [],action){
    switch(action.type){
        case 'ADD_MOVIES':
            return addMovies(state, action.payload);
        default:
            return state
    }
}


const store = createStore(movieReducer);
export default () => (

    <Provider store={store}>
        <Home/>
    </Provider>

) ;