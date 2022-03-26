import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, image, price } = this.props;

    return (
      <div className="card-container" key={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <h4>RM {price}</h4>
      </div>
    );
  }
}

export default Card;
