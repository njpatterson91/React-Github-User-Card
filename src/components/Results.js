import React from "react";
import Followers from "./Followers";
import styled from "styled-components";

const FlexxyBoi = styled.div`
  display: flex;
  max-width: 100%;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

class Results extends React.Component {
  render() {
    const userData = this.props.data;
    const avatarUrl = userData.avatar_url;
    return (
      <div>
        <h1>Github handle is: {userData.login}</h1>
        <img width="200px;" src={avatarUrl} alt="user avatar" />
        <p>
          Has {userData.followers} followers and is following{" "}
          {userData.following}
        </p>
        <hr />
        <h2>Followers</h2>
        <hr />
        <FlexxyBoi>
          {this.props.followerData.map((item) => (
            <Followers
              data={item}
              key={item.login}
              handleClick={this.props.handleClick}
            />
          ))}
        </FlexxyBoi>
      </div>
    );
  }
}

export default Results;
