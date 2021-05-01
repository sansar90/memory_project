import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Video from './components/Video/Video';
import Upload from './components/Video/Upload/Upload';
import VideoPlayer from './components/Video/VideoPlayer/VideoPlayer';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
    
      <Navbar />
      

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        
        <Route exact path="/video" component={Video} />
        
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/video/:videoTitle" component={VideoPlayer} />
      
      </Switch>
   
    </Container>
    
    
    
  </BrowserRouter>
  
);

export default App;