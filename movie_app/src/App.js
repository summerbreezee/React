import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

// 컴포넌트개 존재하기 시작하면 will Mount -> render -> didMount 순으로 진행된다
// will mount에서 api 호출 -> 데이터 관련 작업

class App extends Component {

//state가 바뀔때마다 , render이 발생한다.
state = {

}

componentDidMount() {
  // //Promise는 비동기
  //   fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  //   .then(response =>response.json()) //fetch의 결과물(response)을 json으로 변환
  //   .then(json => console.log(json))
  //   .catch(err => console.log(err));
    this._getMovies();
}

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
        return <Movie
        title={movie.title_long}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}/>
      })
      return movies;
  }

   _getMovies = async () => {
    // _getMovies function은 순서에 상관없는 async function은
    const movies = await this._calApi();
    // await : callApi function이 끝나기를 기다림. return value가 무엇이든. async를 스지 않으면 await도 작동하지 않음.
    this.setState({
      movies
    })
  }

  _calApi = () => {
    //Promise는 비동기
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
      .then(response =>response.json()) //fetch의 결과물(response)을 json으로 변환
      .then(json => json.data.movies)   //=> 는 자동 return 
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className = "App" >
      {this.state.movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }
}

export default App;
