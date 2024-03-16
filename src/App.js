import React from 'react';
import Wrapper from './components/wrapper';
import ButtonBox from './components/Buttonbox';
import Button from './components/Button';
import Screen from './components/Screen';
import CalcProvider from './context/CalcContext';
import './App.css';

const btnValues =[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],  
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <div className="App">
    <CalcProvider>
      <Wrapper >
      <Screen/>
      <ButtonBox>
        {btnValues.flat().map((btn,i)=>(<Button 
        value ={btn}
        key ={i} />))}
      </ButtonBox>
      </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
