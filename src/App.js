import React from 'react';
import './App.scss';
import Header from './components/header';
import Questionview from './pages/questionview';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Questionview />
    </div>
  )
}

export default App

