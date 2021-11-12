import logo from './logo.svg';
import './App.css';
import React from 'react';
import Ciao from './components/Ciao';

function App() {
  const user = {
    fname: 'Elon',
    sname: 'Musk',
  };
  return (
    <>
      <Ciao name={`${user.fname} ${user.sname}`} />
      <Ciao name="Tim Lee" />
      <Ciao name="Oleg Sumsky" />
    </>
  );
}

export default App;
