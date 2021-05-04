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
            <Button component={Link} to="/video" variant="contained" color="primary" ><img className={classes.image} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAADr6+vv7+8fHx8ICAjg4OAMDAzPz8/y8vIEBAT8/Pz5+flfX1/d3d3l5eUVFRWLi4t7e3tlZWUaGhosLCyenp6kpKTY2NhVVVXCwsLJyck2NjY9PT24uLhDQ0MkJCRsbGyEhISsrKxNTU2SkpJ0dHRZWVksWCFqAAAEUklEQVR4nO2d6XLqMAxGbSAEAoGwBErL0lKg7/+GF2bgMgkBb7IsPDq/gfGps/mzogrBMAzDMAzDMAzDMMyVfguYfgiLXl5IcIr8A9tjn8FrXMgmuB4TPxoXUE0+PM3HhQzz6Mr9eUg5QxSZ+xTp4HkMfXpIOYxFZIAmIjo+Pb7xPMSPT5ETokg38eeRjhFFxMKfyBLTQ4hl6kcjRfYQYjwt0wyYtJyiHlcMwzAMIuCZSZBcxUtmogNwrjLxuEZXAZmreMxMdAAz6QWcjwtguYrXzEQHqFwl0Hl+Zw7j0Q/tAZWrRCPiN47TASqym4UW+QESGXnMTHRIukAiPjMTHQDziIWnzEQH2FzFR2bCuQrDML4Y9NsB6YPsYPUmqzLgTeR6KylXk56LxWjqdY/NjM7U9klllAde4tbJchuV4TTwo2ITyd54ZTJahx50M2vDSfkMfoI/o/gy8dgSPKxuJFuD+SDscb4Ya89JN3j+85pC88l+SPQ8v7PRu9fvQ49TjVYa7LM8AwqtMo/g4Y8OGgHR+A0m5HwNbilFHs6QZLZtIZaCPTJobWcPf131WfJd+8YOLB1zoburDatUfeOj9oVZ0Mm4M6hv0qj+vsfafBDxOJtsqiNbKD5fvWZlI5RBalErmlZdt6refyhD1GRVPVYUn67uhfyijFCTZWVoqj2T6jqE0JFVvw4Vik9Xz6g2ygg1aVWGlig+/TYimeLTLOIfFmERT7AIi3iCRVjEEyxiLdI/boq0PEGvAdBFvq4bj9kJto4aW+TrnkHNQQt7kEWGlWBsbbS/9BpkkXqR2kwdbmqCLHKoicj0CJSNIYvUI9czpcGu3wuQRRprJVYQATIFEZlM3WuQSYhI2XEO+4iISLlzfHuCjIjMfpye3eiISFksHC7FlEScbvW0RKTMbSuSqYnIdGJ3KSYnIuW31a2eoIiUB4vji6SInJuvH4OKrJ7WUZTGJ0pQkd7o4bH+xvG9RITYNjzYX9i8m4gYThorPVWbgPREhPhtnBLTkyS4yPiv0SM1/eXAIsP9kxLiw3uJPDvVLaoqgoqUzzTMJ4TonX1t/tMURayyCIIiB6ugnpyIbV5HTMR2WUVNJLfPtCmJOO0y0BEpVJWhr6Ei4rwTR0TENTAlIuIeYZMQsXh9sAFkkYbHxD+Y9wSQRR5WUeWn1bAfQRapLWsLqK1Q/IKBSnU93OY0vkj3frpvnF5Cr4NeizK+vn0DW8ARpMzp87Tb5UvoZuNcr8UinmARFvEEi7CIJ1iERTwRqYhqLzWaV1yjeem4+hp4jjJCTcxeA692JIBrh+pO7cV8VXvpaFolRNO8Ipp2Is0NXhCG+gK7Bi/NLXdCtMi90TQejZY70TRBiqctVTSNwuJp3RZNMz3q7Q0Tg836WBpOxtMCNJ6mrPG0yRUkGxfbLr0jaSV9YXBp7h38GHNu7v1fpx3i36PdaBNZ2zEMwzAMwzAMwzAMKv8Aabxeb7hKHb0AAAAASUVORK5CYII="} alt="icon" height="60" />Videos Section</Button>&nbsp;
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