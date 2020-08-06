import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  //data를 fetch할 때(가지고 올 때) 여기에서 넣어줄 거임.
  componentDidMount() {
    console.log("componentdidMount");

    this.getMovies();

    setTimeout(() => {
      //this.state.isLoading = false; 이렇게 state를 직접 변경하면 안된다! setState를 사용해야 한다.
      this.setState({
        isLoading: false,
        book: "load load load",
      });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    console.log("setSteate", this.state);
    console.log(isLoading);
    return <div>{isLoading ? "Loading..." : "we are Ready"} </div>;
  }
}

export default App;
