import { useSelector, useDispatch } from "react-redux";
import { setActiveStatus } from "../redux/actions";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.cardsReducer.activeCard);
  const showCat = useSelector((state) => state.cardsReducer.showCat);

  return (
    <div
      className={
        active === card.id
          ? `bg-green-300 m-3 shadow-lg`
          : "bg-red-300 m-3 shadow-lg"
      }
      style={{ width: "250px", height: "350px" }}
      onClick={() => dispatch(setActiveStatus(card.id))}
    >
      {active === card.id ? <h1>{card.id}</h1> : ""}
      {showCat && (
        <img
          src={`https://placekitten.com/200/300?image=${card.id}`}
          alt="kitten"
        />
      )}
    </div>
  );
};

export default Card;
