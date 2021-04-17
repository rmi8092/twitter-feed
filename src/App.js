import React from 'react';

import './App.css';
import Navmenu from './Navmenu/Navmenu';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Navmenu/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
