import React, {useState} from 'react';
////Import Middleware////
import { Switch, Route, BrowserRouter } from "react-router-dom";
////Import CSS////
import './App.css';
///Components///
import Match from "./components/Match"
import Ranking from  "./components/Ranking"
import Homepage from "./components/Homepage"

function App() {
  const [elem, setElem] = useState()

  const handleElem = (elem) => {
    console.log('elem', elem);
    
    setElem(elem)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={Homepage} /> 
          <Route path = "/match" component={() => <Match handle={handleElem}/>} /> 
          <Route path="/ranking" component={() => <Ranking elem={elem}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
