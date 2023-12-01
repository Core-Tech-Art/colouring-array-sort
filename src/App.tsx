import { ReactHTMLElement, useEffect, useState } from 'react';
import CSS from 'csstype'
import './App.css';
import {OutField} from './Components/OutField';

const inputStyle : CSS.Properties = {
  width:'30%',
  height:'50px',
  textIndent:'20px',
  marginBottom:'15px',
  outline:'none'
}
function App() {
  const [resArray, setResArray] = useState<{red : string, green : string, blue : string}>({
    red : "", 
    green : "", 
    blue : ""})

    
  let ii = 0;
  const handleChange = ( e : React.FormEvent<HTMLElement>) => {
    setResArray({
              red : (e.target as any).value,
              green : "5, 3, 1",
              blue : "4, 4"
          })
       console.log(resArray)

  }
  useEffect(() => {
    setResArray({
              red : "1, 3, 5",
              green : "5, 3, 1",
              blue : "4, 4"
          })
          console.log(11111);
          
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <input style={inputStyle} placeholder='Array length.'/>
        <input style={inputStyle} placeholder='Input array.' onChange={(e) => {handleChange(e)}}/>
        <OutField resProps={resArray} setResArray={setResArray}/> 
      </header>
    </div>
  );
}

export default App;
