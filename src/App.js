import React from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";

class App extends React.Component {
  state = {
    userDetails: [],
    userName: "odst0016",
  };

  getData = (userName) => {
    axios.get(`https://api.github.com/users/${userName}`).then((res) => {
      this.setState({ userDetails: res.data });
    });
  };

  componentDidMount() {
    this.getData(this.state.userName);
  }

  render() {
    console.log(this.state.userDetails);
    return (
      <div>
        <h1>Github User Search</h1>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
