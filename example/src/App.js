import React from 'react';

function App() {
  
  const greeting = "Hi!!,"
  const dom = <h1 className="foo">{greeting}  This is dom!!!</h1>

  //属性名はキャメルケース

  const inputLog =  <input type="text" onChange={() => {console.log("start input")}} />;

  const forexample = (
    <React.Fragment> 
      <label htmlFor="bar">bar</label>
      {inputLog}
    </React.Fragment>
  );

  //return で返すタグは1つでないといけない　→　要らない出力をなくす：React.Fragment

  return forexample;

  // return　の書き方
  //return dom;
  //return (dom);
  
}

export default App;
