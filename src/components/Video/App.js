import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Dashboard from './components/Dashboard/Dashboard';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Upload from './Upload/Upload';

function App() {
  return (
    <React.Fragment>
     <Navbar />
      <Route exact path="/video" component={Dashboard} />
      <Route exact path="/video/:videoTitle" component={VideoPlayer} />
      <Route exact path="/upload" component={Upload} />
      
    </React.Fragment>
  );
}

export default App;