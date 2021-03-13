import "./styles.css";
import react, { useState } from 'react';

/* 
HTML= hypertext markup language
this is the structure of your webpage

CSS = Cascading Style Sheets
this is code that modifies the way your webpage is displayed

JavaScript
is the code that makes things actually happen on page

*/

function GreetingComponent(props){
  let [name, setName] = useState(props.name ?? '');

  function handleClick(){
    alert("Hello, " + name);
  }
  return (
    <div>
          <div>{name}</div>
          <input type="text" value = {name} onChange={(e) =>setName(e.target.value)}/>
          <button onClick={(e)=>handleClick()}>Click me</button>
        </div>
  )
}
//render this to webpage
export default function App() {
  
  
  return (
    //CSS class name inside DIV
    <div className="App">
      <div className = "container">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <a href="https://www.google.com.au" target="_blank">Google</a>
        <img alt="image of dogs" src=""/>
      <GreetingComponent name="Anna"/>
      </div>
    </div>
  );
}
