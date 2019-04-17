import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Games from "./Games";
import image1 from "./images/image1.jpg.png";
import image2 from "./images/image2.png";
 import image3 from "./images/image3.png";

 

class Main extends Component {
  render() {
    return (
	<BrowserRouter>
        <div>
          <h1>Steam</h1>
          <ul className="header">
   

         <li><NavLink exact to="/">Store</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">SteamGreenlight</NavLink></li>
			      <li><NavLink to="/games">User</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
			      <Route path="/games" component={Games}/>
          </div>
        </div>
		</BrowserRouter>
    );
  }
}

 
export default Main;

