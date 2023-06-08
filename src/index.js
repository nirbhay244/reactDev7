import React from 'react';
import ReactDOM from 'react-dom/client';

function A(props){
  return <h1>Hello Nirbhay {props.surname} <B location={"from A"}/> </h1>
  
}

function B(props){
  let b = 'B'
  return <h1>This is component {b} {props.location}</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
let sn = "Singh";
root.render(
  
   <A surname={sn}/>
  
);

