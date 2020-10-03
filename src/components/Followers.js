import React from "react";

class Followers extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.handleClick}>
          <img
            id={this.props.data.login}
            width="100px;"
            src={this.props.data.avatar_url}
            alt=""
          />
        </div>
        <div>
          <p>Username: {this.props.data.login}</p>
        </div>
      </div>
    );
  }
}

export default Followers;
