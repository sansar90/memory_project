import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">MemoriesBook</Typography>
        <img className={classes.image} src={"https://cdn.jsdelivr.net/gh/sansar90/memory_project@master/src/components/Navbar/memories.png"} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>&nbsp;&nbsp;
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button component={Link} to="/video" variant="contained" color="primary" >Videos Section</Button>&nbsp;
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            <Button component={Link} to="/upload" variant="conatined" color="primary" ><img className={classes.image} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///8AAADc3NyUlJSGhoZTU1Pw8PAYGBjl5eX09PQ9PT329vb7+/s5OTlCQkI7Ozs1NTVKSkorKyuOjo5eXl5wcHD3NdmMAAACmklEQVR4nO3dgVbiMBCFYbO6q6VVUNb3f9VdrEUDKYQ2ydzE/3sATu7JTGcq5+DdHQAAAAAAAAAAwM80/B2sj5BXv3W7zvoQOfUvzrlNwxGHrTt4brZQh40bPffWR8mjmwI6t22yUD96cLJp8BY/e3DSXi/2G+drrRe7F3eqraFxdoMfj5uGbnEIBWypF/ttMOD/iI0Uan/eg2314jB3gwe7Bgo1+JD5VqjVP266ywHrX+Au9OCxF6u+xZkxcVKoFffi7JhopRcDq9pMoVbai1ElWvMt3hCwzl68MgfPIlZXqBFjwlfb0Li4qoXVtcDdWKKjmh430WPCV8/QuLkHjxErucWbxoSvjqERuaqF1fC1zeISHen34ooSHakX6uqA6kPj6ht9DOW3/pU9ONEdGgtWtTDVXly0qs1ElLzFhatamOLQSHiDB3pf2yQYEz61Xly1qoVpLXCJxoRPqReTjQmfzlt/4ofMF5WhkWRVC9NY4LL04ERhgUs+Jnz2QyPDmDiJaHyLSVe1MNuhkblER5YLXJGAlr2YbQ6eRTQq1KxjwmfTi5lWtTCLBa5YiY7KD40CY8JXulAL9uAxYtFbLDQmfCWHRvZVLWxX7BYNSnRUqhdNSnRUplANA5YZGhnf6KMiZi9U44AFIr6//r7ubeHp3yI++/U9c8IoDwsTPlgfPBoJSaiPhCTUR0IS6iMhCfWRkIT6SEhCfSQkoT4SklAfCUmoj4Qk1EdCEuojIQn1kZCE+khIQn0kJKE+EpJQHwlJqI+EJNS3d49LuL31waP1f5YR+BEMAAAAAAB+iOGXvby/4PK08G9MKT2RkIQkNEdCEpLQHglJSEJ7JCQhCe2RcJ1uf29tL/F/SwAAAAAAAAAAAAAAAEL+AckuO4NI0tv7AAAAAElFTkSuQmCC"} alt="icon" height="60" />Upload Video</Button>
     

            
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;