import Head from 'next/head'
import { MovieFormat } from './movie-format'
import { MovieCard } from './movie-card'
import { useState, useEffect } from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import Featured from './Featured';

const API_KEY = 'api_key=3646c928b1d09ad843c146504a0749e0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const SEARCH_URL = BASE_URL + '/search/movie?'+API_KEY

export default function Home() {
    const [searchValue, setSearchValue] = useState("")
    const [style, setStyle] = useState({display: "block"})
    const [results, setResults] = useState([])
    const [cardstate, setCardState] = useState({"open": false, "movie": []})
    const [token, setToken] = useState([])
    
    /* Fetching data from TMDB */
    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
          console.log(data.results)
          setResults(data.results)
      })
    }, [])

    useEffect(() => {
        fetch('https://movielist-api-tubes-arc.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=UTF-8'
            },
            body: '{"username" : "Test-first", "password" : "1230"}'
          }).then(response => response.json()
          ).then(data => {
              console.log(data)
            setToken(data.token)})
    })
    
      const handleSubmit = e => {
        setStyle({display: "none"})
    setSearchValue(e.target.value);
    fetch(SEARCH_URL+'&query='+searchTerm)
      .then((res) => res.json())
      .then((data) => {
      if (!data.errors) {
        console.log(searchValue)
        setResults(data.results);
      } else {
        setResults([]);
        }
      });
  };

    return(
        <div className='container'>
            <head>
                {/* font-family style */}
                <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Poppins'></link>
                <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            </head>

            <Navbar submit={handleSubmit} value={searchValue}/>
            <Featured style={style}/>

            {/* show movies */}
            <div className='movie-container'>
                {/* jika ada data */}
                {results.length > 0 && (
                results.map((movie) => (
                <div className="movie" key={movie.id}>
                <MovieFormat 
                    movie={movie}
                    open={() => {setCardState({"open": true, "movie": movie})}}
                    token={token}
                    />
                </div>
                ))
                )}

                {/* jika tidak ada data */}
                {results.length === 0 && (
                <h1 className="no-result">No result :(</h1>
                )}
            </div>

            {/* show card with movie's details */}
            {cardstate.open && (
            <MovieCard 
            card={cardstate}
            close={() => {setCardState({"open": false, "movie": []})}}
            token={token}
            />
            )}

            <Footer />

            <style jsx>{`
            .container {
                min-height: 100vh;
                margin: 0px;
            }

            .movie-container {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                min-height: 100vh;
                gap: 32px;
                margin: 40px;
            }
            `}</style>
            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: "Poppins";
                background-color: #000;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}