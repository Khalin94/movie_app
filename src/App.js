import React from "react";
//import First from "./First"; for props example

/* app 안에서 컴포넌트를 만들어서 사용하는 방법!
function First(){
  return <h3>first Component!</h3>
}
*/

// =======props example!=====
// const order = [
//   {
//     id: 1,
//     name: "first",
//     image:
//       "https://images.unsplash.com/photo-1570521070694-ebff520095bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
//     pictureRating: 1.1,
//   },
//   {
//     id: 2,
//     name: "second",
//     image:
//       "https://images.unsplash.com/photo-1560773766-0bd79c039083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
//     pictureRating: 2.0,
//   },
//   {
//     id: 3,
//     name: "third",
//     image:
//       "https://images.unsplash.com/photo-1556917452-890eed890648?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     pictureRating: 3.0,
//   },
//   {
//     id: 4,
//     name: "fourth",
//     image:
//       "https://images.unsplash.com/photo-1523286877159-d9636545890c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
//     pictureRating: 4.0,
//   },
// ];

//
// function renderFirst(number) {
//   return (
//     <First
//       key={number.id}
//       name={number.name}
//       picture={number.image}
//       pictureRating={number.pictureRating}
//     />
//   );
// }

// ==========functional Component ==========
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* <First
//         abc="test String abc"
//         trueOrFalse={true}
//         someArr={["abc", 1, 2, 3, 4, 5]}
//         order={"second"}
//       />
//       <First order={"third"} />
//       <First order={"fourth"} /> */}
//       {/* {order.map((number) => (
//         <First name={number.name} picture={number.image} />
//       ))} */}

//       <div> {order.map(renderFirst)}</div>
//     </div>
//   );
// }

// ====== class component ==========

class App extends React.Component {
  state = {
    count: 0,
  };

  plus = () => {
    this.setState(
      (current) => ({ count: current.count + 1 })
      //count: this.state.count + 1, perpomence가 좋지 못한 코드임 외부 object를 직접적으로 가지고 오는 것은 지양해야 함.
    );
    console.log("plus :: " + this.state.count);
  };

  minus = () => {
    this.setState(
      (current) => ({ count: current.count - 1 })
      // {count: this.state.count - 1,}
    );
    console.log("minus :: " + this.state.count);
  };

  render() {
    return (
      <div>
        <div>number is : {this.state.count}</div>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    ); // class이기 때문에 state.count 앞에 this를 붙혀줘야 한다
  }
}

export default App;
