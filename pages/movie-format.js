import { useState, useEffect } from "react";
import {AddMovieToWishlist} from'./movie-control';
import {RemoveMovieFromWishlist} from'./movie-control';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieFormat = (props) => {
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
    <div className="movie-format">

      {props.movie.poster_path ? (
        <img className="movie-poster" 
        src={`${IMG_URL+props.movie.poster_path}`}
        alt={`${props.movie.title} poster`}
        onClick={props.open}
        />
        ) : (
        <div className="filler-poster" onClick={props.open}></div>
      )}
           
      <button className='add-wishlist' style={addstyle} onClick={handleClickAdd}>+</button>
      <button className="wishlist" style={wishstyle} onClick={handleClickDelete}>
        <span className="wish">&#x2713;</span>
        <span className="del-wishlist">&#xD7;</span>
      </button>
      <div className='movie-info'>
        <div className='movie-rate'>
          <h1 className='star'>&#x1F7CA;</h1>
          <h1 className='rate'>{props.movie.vote_average}</h1>
        </div>
        <h1 className='movie-title' onClick={props.open}>{props.movie.title}</h1>
        <h2 className='movie-date'>{props.movie.release_date}</h2>
      </div>

      <style jsx>{`
      .movie-format {
        position: relative;
        height: fit-content;
        width: 200px;
        background-color: #000;
        color: #F2EEE2;
      }
      
      .movie-poster {
        height: 300px;
        width: inherit;
        border-radius: 8px;
      }

      .movie-poster:hover {
        cursor: pointer;
        opacity: 0.9;
      }

      button {
        position: absolute;
        height: 40px;
        width: 40px;
        top: 8px;
        border: 0px;
        align-items: center;
        text-align: center;
        right: 8px;
        font-size: 32px;
        border-radius: 50%;
      }
      
      .add-wishlist {
        background-color: #FDD000;
      }

      .add-wishlist:hover {
        cursor: pointer;
        box-shadow: rgba(253,208,0, 1) 0px 4px 16px, rgba(253,208,0, 1) 0px 8px 24px, rgba(253,208,0, 1) 0px 16px 56px;
      }

      .wishlist {
        display: none;
        background-color: #72CC50;
      }

      .wish {
        font-size: 20px;
        font-weight: 1000;
      }

      .del-wishlist {
        display: none;
      }

      .wishlist:hover {
        cursor: pointer;
        background-color: red;
        box-shadow: rgba(255, 0, 0) 0px 4px 16px, rgba(255, 0, 0) 0px 8px 24px, rgba(255, 0, 0) 0px 16px 56px;
      }

      .wishlist:hover .wish {
        display: none;
      }

      .wishlist:hover .del-wishlist {
        display: block;
      }

      .movie-info {
        padding: 4px 10px 24px 10px;
      }

      .movie-rate {
        display: flex;
        gap: 8px;
        font-size: 8px;
      }

      .star {
        color: #FDD000;
        margin: 0px;
      }

      .rate {
        margin: 0px;
      }

      .movie-date {
        font-size: 12px;
        font-weight: 200;
        margin: 0px;
      }

      .movie-title {
        margin: 0px;
        font-size: 16px;
      }

      .movie-title:hover {
        color: #FDD000;
        cursor: pointer;
      }
      `}</style>
    </div>
  )
}
