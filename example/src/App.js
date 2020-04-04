import React, { Component } from 'react';

//Ex props
const Ex = (props) => {
  return( 
    <React.Fragment>
      <h1>Hi, Here is {props.name}'s Page.</h1>
      <p>you are {props.age} years old</p>
    </React.Fragment>
  )
}

Ex.defaultProps = {
  age: 1
};

function App() {

  const profile = [
    {name: "Taro", age: 19},
    {name: "Siro", age: 7},
    {name: "John"},
    {name: "Jiro", age: 15}
  ]

  return (
    <React.Fragment>
      {
        profile.map((profile, index) =>  {
          return <Ex name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  );
}

export default App;
