import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContentPage from './pages/ContentPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={ContentPage} />
      </Router>
    </div>
  );
}

export default App;
