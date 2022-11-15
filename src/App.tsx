import React from 'react';
import './App.css';
import { AppRouter } from './components/AppRouts'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
    </>
  );
}

export default App;
