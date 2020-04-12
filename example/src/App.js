import React from 'react';
import PropTypes from 'prop-types';

//Ex props
const Ex = (props) => {
  return( 
    <React.Fragment>
      <h1>Hi, Here is {props.name}'s Page.</h1>
      <p>you are {props.age} years old</p>
    </React.Fragment>
  )
}

Ex.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

function App() {

  const profile = [
    {name: "Taro", age: 19},
    {name: "Siro", age: 7},
    {name: "Saburo", age: 5},
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
