import "../styles/components/_card.scss";

const Card = ({ imgSrc, name, description }) => {
  return (
    <article className="card">
      <img src={imgSrc} alt={name} />
      <div className="informations">
        <span className="name">{name}</span>
        <p className="description">{description}</p>
      </div>
    </article>
  );
};

export default Card;
