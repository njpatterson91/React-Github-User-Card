import React from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import styled from "styled-components";

const MainFlex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: grey;
  text-align: center;
`;

class App extends React.Component {
  state = {
    followerDetails: [],
    userDetails: [],
    userName: "odst0016",
  };

  getData = (userName) => {
    axios.get(`https://api.github.com/users/${userName}`).then((res) => {
      this.setState({ userDetails: res.data });
    });
    axios
      .get(`https://api.github.com/users/${userName}/followers`)
      .then((res) => {
        this.setState({ followerDetails: res.data });
      });
  };

  componentDidMount() {
    this.getData(this.state.userName);
  }
  handleUserChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
    this.getData(this.state.userName);
  };
  handleClick = (e) => {
    // this.setState({
    //   userName: e.target.id,
    // });
    this.getData(e.target.id);
  };

  render() {
    return (
      <MainFlex>
        <h1>Github User Search</h1>
        <Search
          handleSearch={this.handleSearch}
          handleUserChange={this.handleUserChange}
        />
        <Results
          data={this.state.userDetails}
          followerData={this.state.followerDetails}
          handleClick={this.handleClick}
        />
      </MainFlex>
    );
  }
}

export default App;
