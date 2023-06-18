import React, {Component, useState} from "react";
import '../styles/App.css';
import Flames from "./Flame";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <Flames></Flames>
            </div>
        )
    }
}


export default App;
