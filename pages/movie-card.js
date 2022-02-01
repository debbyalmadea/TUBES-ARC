import { useState, useEffect } from "react";
import {AddMovieToWishlist} from'./movie-control';
import {RemoveMovieFromWishlist} from'./movie-control';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCard = (props) => {
  // wish list button display
  const [wishstyle, setWishstyle] = useState({display: "none"})

  // add to wish list button display
  const [addstyle, setAddstyle] = useState({display: "block"})

  // Add movie to wish list
  const handleClickAdd= () => {
    AddMovieToWishlist(props.token, props.movie.id)
    setAddstyle({display: "none"})
    setWishstyle({display: "block"})
  }

  // Delete movie from wish list
  const handleClickDelete= () => {
    RemoveMovieFromWishlist(props.token, props.movie.id)
    setWishstyle({display: "none"})
    setAddstyle({display: "block"})
  }
    return (
        <div className="movie-card">
            <div className="card">
                {props.card.movie.poster_path ? (
                    <img className="movie-backdrops" 
                    src={`${IMG_URL+props.card.movie.poster_path}`}
                    alt={`${props.card.movie.title} poster`}
                    onClick={props.open}
                    />
                ) : (
                <div className="filler-poster" onClick={props.open}></div>
                )}

                <div className="movie">
                {props.card.movie.poster_path ? (
                    <img className="movie-poster" 
                    src={`${IMG_URL+props.card.movie.poster_path}`}
                    alt={`${props.card.movie.title} poster`}
                    onClick={props.open}
                    />
                ) : (
                <div className="filler-poster" onClick={props.open}></div>
                )}
                
                <div className="movie-info">
                    <h1 className="movie-title">{props.card.movie.title}</h1>
                    <div className="movie-sub">
                        <div className='movie-rate'>
                            <h2 className='star'>&#x1F7CA;</h2>
                            <h2 className='rate'>{props.card.movie.vote_average}</h2>
                        </div>
                        <h2 className='movie-date'>{props.card.movie.release_date}</h2>
                        <button className="add-wishlist" style={addstyle} onClick={handleClickAdd}>+ Wish List</button>
                        <button className="wishlist" style={wishstyle} onClick={handleClickDelete}>Wish List</button>
                    </div>
                    <p className="movie-summary">{props.card.movie.overview}</p>
                </div>
                </div>

                <button className="close-card" onClick={props.close}>&times;</button>
            </div>

            <style jsx>{`
              .movie-card {
                display: flex;
                justify-content: center;
                position: fixed; 
                z-index: 1; 
                padding-top: 32px; 
                padding-bottom: 32px;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow-y: auto; 
                background-color: rgb(0, 0, 0); 
                background-color: rgba(0, 0, 0, 0.4); 
              }

              .card {
                background-color: #000;
                margin: auto;
                border: 1px solid transparent;
                width: 80%;
                position: relative;
                border-radius: 32px;
              }

              .movie-backdrops {
                width: 100%;
                height: 300px;
                object-fit: cover;
                object-position: 0 -200px;
                filter: blur(8px);
                -webkit-filter: blur(3px);
                opacity: 0.5;
                border-radius: 32px 32px 0px 0px;
              }

              .movie {
                  padding: 0px 40px;
                  color: #F2EEE2;
              }

              .movie-poster {
                position: absolute;
                top: 60px;
                height: 300px;
                width: 200px;
                border-radius: 8px;
              }
              
              .movie-title {
                  color: #FDD000;
                  font-size: 60px;
                  margin: 50px 0px 0px 0px;
              }

              .movie-sub {
                  display: flex;
                  gap: 16px;
                  align-items: center;
                  font-size: 12px;
              }

              .movie-rate {
                display: flex;
                gap: 4px;
              }

              .star {
                color: #FDD000;
                margin: 0px;
              }
        
              .rate {
                margin: 0px;
              }
        
              .movie-date {
                font-weight: 200;
                margin: 0px;
              }

              .movie-summary {
                  max-width: 100%;
                  margin-bottom: 32px;
              }

              .close-card {
                position: absolute;
                height: 1.25em;
                width: 1.25em;
                font-size: 32px;
                top: 32px;
                right: 32px;
                border: 0px;
                border-radius: 50%;
                align-items: center;
                text-align: center;
                background-color: #FDD000;
              }

              .close-card:hover {
                cursor: pointer;
                box-shadow: rgba(253,208,0, 1) 0px 4px 16px, rgba(253,208,0, 1) 0px 8px 24px, rgba(253,208,0, 1) 0px 16px 56px;
              }

              button {
                  border-radius: 4px;
                  align-items: center;
                  text-align: center;
                  padding: 2px 8px;
                  border: 1px solid #FDD000;
              }

              .add-wishlist {
                  color: #FDD000;
                  background-color: transparent;
              }

              .add-wishlist:hover {
                  cursor: pointer;   
              }

              .wishlist {
                  background-color: #FDD000;
                  color: #000;
              }

              .wishlist:hover {
                  cursor: pointer;
                  box-shadow: rgba(253,208,0, 1) 0px 3px 5px;
              }
            `}</style>
        </div>
    )
}