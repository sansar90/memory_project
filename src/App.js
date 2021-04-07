import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Video/components/Dashboard/Dashboard';
import {Upload} from './components/Video/Upload/Upload';
import VideoPlayer from './components/Video/components/VideoPlayer/VideoPlayer';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
    
      <Navbar />
      

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        
        <Route exact path="/video" component={Dashboard} />
        <Route exact path="/video/:videoTitle" component={VideoPlayer} />
        <Route exact path="/upload" component={Upload} />
      
      </Switch>
   
    </Container>
    
    
    
  </BrowserRouter>
  
);

export default App;