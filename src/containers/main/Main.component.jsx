import React from "react";

import Header from "../../components/header";
import Landpage from "../../components/landpage";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Landpage />
      </div>
    );
  }
}

export default Main;
