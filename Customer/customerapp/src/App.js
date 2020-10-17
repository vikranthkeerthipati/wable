import React from 'react';
import NavBar from './components/NavBar';
// import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <NavBar />
      </div>
    );
  }
}

export default App;