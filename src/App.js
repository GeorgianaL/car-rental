import React, { Component } from "react";

import SideBar from "./containers/sidebar";
import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <div className="car-dealer">
        <Main />
        <SideBar />
      </div>
    );
  }
}

export default App;
