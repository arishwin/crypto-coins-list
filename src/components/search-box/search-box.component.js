import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          className={this.props.className}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
