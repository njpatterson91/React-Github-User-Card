import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="searchString">
            Search for user:
            <input type="text" name="searchString" />
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
