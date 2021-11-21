import React from 'react';
import './App.css';
import Login from './Components/LoginPage';
import Register from './Components/RegisterPage';
import Navbar from './Components/Navbar';
import SellerProfile from './Components/SellerProfile';
import HomePage from './Components/HomePage'
import {ThemeProvider} from '@material-ui/styles';
import Footer from './Components/Footer';


import theme from './temaConfg';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import CustomerProfile from './Components/CustomerProfile';

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
            <Router path="/sellerProfile" exact>
              <SellerProfile/>
            </Router>
            <Router path="/customerProfile" exact>
              <CustomerProfile/>
            </Router>
          </Switch>    
        </div>
        <>
        <Footer/>  
        </>
        
    </Router>
    
    </ThemeProvider>
  );
}

export default App;
