import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { addCardItem, setShowCat } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="bg-blue-400 px-2 py-1 m-4 rounded-sm text-white"
          onClick={() => dispatch(addCardItem())}
        >
          add card
        </button>
        <button
          className="bg-blue-400 px-2 py-1 m-4 rounded-sm text-white"
          onClick={() => dispatch(setShowCat())}
        >
          show cat
        </button>
      </div>

      <CardList />
    </div>
  );
};

export default App;
