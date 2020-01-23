import React from 'react';
import About from './components/About';

import { JSSManager } from "@microsoft/fast-jss-manager-react";
import { create } from "jss";

const jssInstance = create();

JSSManager.jss = jssInstance;

function App() {
  return (
    <div>
      <div className="App">
        <About />
      </div>
    </div>
  );
}

export default App;
