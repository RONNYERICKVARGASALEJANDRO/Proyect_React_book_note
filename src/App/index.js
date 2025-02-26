import React from 'react';
import './App.css';
import { AppUI } from './appUI';
import { ComponentProvider } from '../component/componentContext';

function App() {
  
  return (
    <ComponentProvider> 
      <AppUI/>
      </ComponentProvider>
   
  );
}

export default App;
