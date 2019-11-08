import React from 'react';
import './App.css';
import CharacterCard from "./components/characterCard";
import styled from "styled-components";

const App = () => {
  const SiteLayout = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className="app">
      <header>
        <h1 className="Header">React Wars</h1>
      </header>
      <SiteLayout>
        <CharacterCard />
      </SiteLayout>
    </div>
  );
}

export default App;
