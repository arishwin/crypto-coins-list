import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, image, price } = this.props;

    return (
      <div className="card-container" key={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>RM {price}</p>
      </div>
    );
  }
}

export default Card;
