import { combineReducers } from "redux";
import cardReducer from "./cardReducer";

export default combineReducers({
  cardsReducer: cardReducer,
});
