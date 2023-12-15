
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Post from './Post';
import Contact from './contact';
import Blog from './blog'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">{}
            <Blog />
          </Route>
          <Route path="/">
            <div>
              <Post username="Gary Vaynerchuk" message="..." timestamp="2006" />
              <Post username="Mashable" message="..." timestamp="2005" />
              <Post username="TechCrunch" message="..." timestamp="2018" />
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
