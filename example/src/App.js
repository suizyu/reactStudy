import React, { Component } from 'react';

// //クラスコンポｰネント
// class ClassApp extends Component{

//   constructor(){
//   }

//   render(){
//     return <h1>render by class</h1>;
//   }
// }

//関数コンポーネント
const Ex = () => {
  return <h1>Example</h1>
}

function App() {
  return (
    <React.Fragment>
      <Ex />
      <Ex />
      <Ex />
    </React.Fragment>
  );
}

export default App;
