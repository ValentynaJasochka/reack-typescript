import React, { FC, useState } from 'react';
import './App.css';

type BtnProps = {text: string, onClick: ()=>void};
type AppProps = {title: string};

const AppBtn: FC<BtnProps> = ({text, onClick}) => {return (<button className='btn' type='button' onClick={onClick}>{text}</button>)}

const App: FC<AppProps> = ({title}) => {
  const [counter, setCounter] = useState(0)
  const clickIncrement = ()=> setCounter(counter+1);
  const clickDecrement = ()=>( counter === 0? 0: setCounter(counter-1));
  return (
    <div className="App">
      <h1>{title}: {counter} times</h1>
      <AppBtn text='Click+' onClick={clickIncrement}/>
      <AppBtn text='Click-' onClick={clickDecrement}/>

    </div>
  );
}

export default App;
