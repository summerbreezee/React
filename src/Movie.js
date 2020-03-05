import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
  // 부모컴포넌트에서 받은 데이터 타입과 유무 체크
  static propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
  }

  render(){
    // console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster}/ >
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  // 부모컴포넌트에서 받은 데이터 타입과 유무 체크
  static propTypes = {
    poster : PropTypes.string.isRequired
  }

  render(){
    console.log(this.props);
    return (
      <img src ={this.props.poster}/>
    )
  }


}

export default Movie;
