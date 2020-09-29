import React from "react";
import axios from "axios";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    userDetails: [],
    userNames: [],
  };

  render() {
    return (
      <div>
        <h1>Github User Search</h1>
        <Search />
      </div>
    );
  }
}

export default App;
