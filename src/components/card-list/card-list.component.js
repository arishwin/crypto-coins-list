import { Component } from "react";

class CardList extends Component {
  render() {
    const { coins } = this.props;

    return (
      <div className="card-list">
        {coins.map((coin) => (
          <h1 key={coin.id}>{coin.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
