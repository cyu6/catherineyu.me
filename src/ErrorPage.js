// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';

function ErrorPage() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>

        {/* <img src={name} alt="name" width="1000px"/> */}
        
        <p> This is AN ERROR 40404040404004040404 </p>
      </header>
    </div>
  );
}

export default ErrorPage;
