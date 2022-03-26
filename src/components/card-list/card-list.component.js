import { Component } from "react";
import "./card-list.styles.css";

import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { coins } = this.props;

    return (
      <div className="card-list">
        {coins.map((coin) => {
          const { name, image, id, price } = coin;

          return <Card name={name} image={image} key={id} price={price} />;
        })}
      </div>
    );
  }
}

export default CardList;
