import "./card.styles.css";

const Card = ({ id, name, image, price }) => (
  <div className="card-container" key={id}>
    <h2>{name}</h2>
    <img src={image} alt={name} />
    <h4>RM {price}</h4>
  </div>
);

export default Card;
