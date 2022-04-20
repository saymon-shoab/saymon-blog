import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../src/configureAmplify'
import Home from "./Pages/Home";
function App() {
  return (
    <div className="">
      <h1 className='text-red-500 text-center text-5xl'>hello saymon welcome tailwind css</h1>
      <Router>
        <Switch>
          <Route exact patch="/"> 
             <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;