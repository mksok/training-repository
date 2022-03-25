import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { ComponentSample } from './samples/component-sample/ComponentSample';
import { ReduxSample } from './samples/redux-sample/ReduxSample';
import { StylingSamples } from './samples/styling-samples/StylingSamples';

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/components" element={<ComponentSample />}/>
          <Route path="/css-samples" element={<StylingSamples />} />
          <Route path="/redux" element={<ReduxSample />} />
          <Route path="/" element={<Navigate replace to="/components"/>} />
        </Routes>
      </Router>
  );
}

export default App;
