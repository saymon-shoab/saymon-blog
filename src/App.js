import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../src/configureAmplify'
function App() {
  return (
    <div className="">
      <h1 className='text-red-500 text-center'>hello saymon welcome tailwind css</h1>
      <Router>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;