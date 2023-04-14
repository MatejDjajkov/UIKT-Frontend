import './App.css';
import './assets/general.css'
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import {Navigate} from "react-router";


class App extends Component {

  render() {
    let routes = (
        <Router>
            <NavBar/>
          <Routes>
            <Route path='/subjects' element={<MainPage/>}/>

              <Route path="*" element={<Navigate to="/subjects"/>}/>
          </Routes>
        </Router>
    )

    return (
        <div>
          {routes}
        </div>
    )
  }
}

export default App;
