import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    //아래처럼 변경할 수 있음.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  //data를 fetch할 때(가지고 올 때) 여기에서 넣어줄 거임.
  componentDidMount() {
    this.getMovies();

    // setTimeout(() => {
    //   //this.state.isLoading = false; 이렇게 state를 직접 변경하면 안된다! setState를 사용해야 한다.
    //   this.setState({
    //     isLoading: false,
    //   });
    // }, 2000);
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          //function을 만들어서 사용할 때
          // isLoading ? "Loading..." : movies.map(renderMovie)
          isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    );
  }
}

//이렇게 function을 만들어서 사용해도 됨.
// function renderMovie(movie) {
//   return (
//     <Movie
//       key={movie.id}
//       id={movie.id}
//       title={movie.title}
//       year={movie.year}
//       summary={movie.summary}
//       poster={movie.medium_cover_image}
//     />
//   );
// }
export default App;
