import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Interests from './Interests';
// import Sidebar from './Sidebar';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/projects'>
            <Portfolio />
          </Route>

          <Route path='/resume'>
            <Resume />
          </Route>

          <Route path='/interests'>
            <Interests />
          </Route>

          <Route path='*'>
          <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
