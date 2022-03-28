import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/v1/coins")
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((error) => console.log(error));
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search);
    });
    setFilteredCoins(filteredCoins);
  }, [search, coins]);

  return (
    <div className="App">
      <h1 className="app-title">Crypto Finder</h1>
      <SearchBox
        className="search-box"
        placeholder="search coins"
        onChangeHandler={onSearchChange}
      />
      <CardList coins={filteredCoins} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       coins: [],
//       search: "",
//     };
//   }
//
//   componentDidMount() {
//     fetch("http://localhost:8000/v1/coins")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ coins: data, filteredCoins: data });
//       });
//   }
//
//   onSearchChange = (e) => {
//     this.setState({
//       search: e.target.value.toLowerCase(),
//     });
//   };
//
//   render() {
//     const { coins, search } = this.state;
//     const { onSearchChange } = this;
//

//

//   }
// }

export default App;
