import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/v1/coins")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ coins: data, filteredCoins: data });
      });
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  render() {
    const { coins, search } = this.state;
    const { onSearchChange } = this;

    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search coins"
          onChange={onSearchChange}
        />
        {filteredCoins.map((coin) => {
          return (
            <div key={coin.id}>
              <h1>{coin.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
