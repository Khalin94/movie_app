import React from "react";
import First from "./First";

/* app 안에서 컴포넌트를 만들어서 사용하는 방법!
function First(){
  return <h3>first Component!</h3>
}
*/

const order = [
  {
    id: 1,
    name: "first",
    image:
      "https://images.unsplash.com/photo-1570521070694-ebff520095bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 2,
    name: "second",
    image:
      "https://images.unsplash.com/photo-1560773766-0bd79c039083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 3,
    name: "third",
    image:
      "https://images.unsplash.com/photo-1556917452-890eed890648?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 4,
    name: "fourth",
    image:
      "https://images.unsplash.com/photo-1523286877159-d9636545890c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  },
];

//
function renderFirst(number) {
  return <First id={number.id} name={number.name} picture={number.image} />;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <First
        abc="test String abc"
        trueOrFalse={true}
        someArr={["abc", 1, 2, 3, 4, 5]}
        order={"second"}
      />
      <First order={"third"} />
      <First order={"fourth"} /> */}
      {/* {order.map((number) => (
        <First name={number.name} picture={number.image} />
      ))} */}

      <div> {order.map(renderFirst)}</div>
    </div>
  );
}

export default App;
