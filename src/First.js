import React from "react";

function First(props) {
  //function First({order}){  props 내부에서 값을 읽어오는 방법 {order}로 바로 읽어올수 있다.
  console.log(props);
  /*
  props 출력 결과
  abc: "test String abc"
  someArr: (6) ["abc", 1, 2, 3, 4, 5]
  trueOrFalse: true
  */
  return (
    <h3>
      {props.name} Component!
      <img src={props.picture} width="100" height="100" alt={props.name}></img>
    </h3>
  );
}

export default First;
