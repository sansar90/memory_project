import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'


import Menu from './core/Menu'
import NewMedia from './media/NewMedia'
import PlayMedia from './media/PlayMedia'
import EditMedia from './media/EditMedia'

const MainRouter = ({data}) => {
  return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/video" component={Home}/>
        

        <PrivateRoute path="/video/new" component={NewMedia}/>
        <PrivateRoute path="/video/edit/:mediaId" component={EditMedia}/>
        <Route path="/video/:videoId" render={(props) => (
            <PlayMedia {...props} data={data} />
        )} />
      </Switch>
    </div>)
}

export default MainRouter