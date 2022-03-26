import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
        <h1 className="app-title">Crypto Search</h1>
        <SearchBox
          className="search-box"
          placeholder="search coins"
          onChangeHandler={onSearchChange}
        />
        <CardList coins={filteredCoins} />
      </div>
    );
  }
}

export default App;
