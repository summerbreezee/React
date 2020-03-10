import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

//smart component : state를 가지고 있음
//dump function :  state를 가지고 있지 않음, willMount, DidMount return 메서드만 가지고 있음
function Movie ({title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title}/ >
      </div>
      <div className="Movie_Columns">
        <h5>{title}</h5>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
        </div>
        <p className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  return (
    <img src ={poster} alt={alt} title={alt} className="Movie_Poster"/>
  )
}

function MovieGenres({genre}) {
  return (
    <span className="Movie_Genres">{genre} </span>
  )
}

Movie.propTypes = {
  title : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.array.isRequired,
  synopsis : PropTypes.string.isRequired
}


MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

MovieGenres.propTypes = {
  genre : PropTypes.string.isRequired
}

export default Movie;
