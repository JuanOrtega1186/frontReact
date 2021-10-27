import React from 'react';
import './App.css';
import Login from './Components/LoginPage';
import Register from './Components/RegisterPage';
import Navbar from './Components/Navbar';
import {ThemeProvider} from '@material-ui/styles';
import theme from './temaConfg';

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Navbar/>
    </div>
    {/*<Login/>*/}
    <Register/>
    </ThemeProvider>
  );
}

export default App;
