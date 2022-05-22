import "./card-sm.css";

const CardSmall = (props) => {
  return (
    <div className="poster__small">
      <div className="poster">
        <img src={props.poster} alt={props.posterName} />
      </div>
      <div className="container">
        <p className="title">{props.title}</p>
        <span className="details">{props.details}</span>
        <div>
          <p className="date">{props.date}</p>
        </div>
      </div>

      
    </div>
  );
};

export default CardSmall;
