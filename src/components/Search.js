import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
          <label htmlFor="searchString">
            Search for user:
            <input
              type="text"
              name="searchString"
              value={this.state.userName}
              onChange={this.props.handleUserChange}
            />
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
