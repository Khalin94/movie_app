import React from "react";

// function Detail(props) {
//   console.log(props);
//   return <div>Detail page</div>;
// }
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <div>{location.state.title}</div>;
    } else {
      return null;
    }
  }
}

export default Detail;
