import React, {
  Component
} from 'react';
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
 setTimeout(()=>{
  this.setState({
    movies : [{
        title: "LALA LAND",
        poster: "https://is1-ssl.mzstatic.com/image/thumb/Video111/v4/4a/17/27/4a17272c-1d42-87b8-8171-82ce38eb9049/pr_source.lsr/268x0w.png"
      },
      {
        title: "PARASITE",
        poster: "https://images-na.ssl-images-amazon.com/images/I/718JRiG%2BnQL._AC_SX522_.jpg"
      },
      {
        title: "OLD BOY",
        poster: "https://i.pinimg.com/236x/92/51/0e/92510ece340f6fb69198f476198ba36b--movie-shelf-old-boys.jpg"
      },
      {
        title: "TAKE A WALTZ",
        poster: "https://is3-ssl.mzstatic.com/image/thumb/Video/v4/66/10/08/66100836-8f30-e60b-d86e-809231573c29/WALTZMAG.jpg/268x0w.jpg"
      },
      {
        title:'LITTLE WOMEN',
        poster:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99BBC9385E42854727C304"
      }
    ]
  })
  }, 5000)
}

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })
      return movies;
  }

  render() {
    console.log('2. render')
    return (
      <div className = "App" >
      {this.state.movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }
}

export default App;
