import React from "react";
import "./Movie.css";
import movies from "./movie.json";
import Header from "../Header";



function Movie() {
  return (
<>
<Header/>
<div className="movieWrapper">
      {movies.map((value, key) => {
        return (
          <>
            <div class="card">
              <img src={value.Poster} style={{ width: "100%" }} />
              <div class="container">
                <h4>
                  <b>{value.Title}</b>
                </h4>
                <p>Year : {value.Year}</p>
                <p>IMDB : {value.imdbID}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
</>
   
  );
}

export default Movie;
