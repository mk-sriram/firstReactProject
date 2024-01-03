import React from 'react'; 
import {useState, useEffect} from 'react'; 
//apikey : 8c51bbce

const API_URL = 'http://www.omdbapi.com?apikey=8c51bbce'; //api url 
const App = () => {
    const [movies, setMovies] = useState([])
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);


    }
    useEffect(() =>{

    },[])
    return( 
        <h1> hello</h1>
    );
}

export default App; 