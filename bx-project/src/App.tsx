import React from 'react';
import './App.css';
//import FetchOrchardData from "./components/FetchOrchardData";
import {OrchardData} from "./components/OrchardData";

const App: React.FC = () => {
  return (
    <div className="App">
      <OrchardData />
    </div>
  );
};

export default App;
