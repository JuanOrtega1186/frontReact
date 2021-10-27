import React from 'react';
import './App.css';
import Login from './Components/LoginPage';
import Register from './Components/RegisterPage';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage'
import {ThemeProvider} from '@material-ui/styles';
import theme from './temaConfg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Router path="/login" exact>
              <Login/>
            </Router>
            <Router path="/register" exact>
              <Register/>
            </Router>
            <Router path="/" exact>
              <HomePage/>
            </Router>
          </Switch>        
        </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
