import "./card-list.styles.css";

import Card from "../card/card.component";

const CardList = ({ coins }) => (
  <div className="card-list">
    {coins.map((coin) => {
      const { name, image, id, price } = coin;
      return <Card name={name} image={image} key={id} price={price} />;
    })}
  </div>
);

export default CardList;
