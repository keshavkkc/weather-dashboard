import React, { useEffect, useState } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute'

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Succesfullt Logout')
    props.history.push('/login')
    setUserLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth();
    }
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          {userLoggedIn === false && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {userLoggedIn === true && (
            <>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '20px' }}>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} handleAuth={handleAuth} />} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact>
            <Typography variant="h4">Welcome to the Weather App</Typography>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default withRouter(App);
