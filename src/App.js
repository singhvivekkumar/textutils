import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Alert from "./Alert";


function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState('this is alert');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#273340';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze below" mode={mode} />
      {/* <Alert alert={alert} /> */}
      {/* <div className="container">
      <Switch>
        <Route exact path="/About" >
          <About/>
        </Route>
        <Route exactn path="/" >
          <TextForm heading="Enter the text to analyze below" mode={mode} />
        </Route>
      </Switch>
      </div>
      </Router> */}
    </>
  );
}

export default App;
