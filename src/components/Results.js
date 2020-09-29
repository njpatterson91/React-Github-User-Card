import React from "react";

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
      </div>
    );
  }
}

export default Results;
