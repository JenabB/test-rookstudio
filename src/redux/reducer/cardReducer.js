import { ADD_CARD_ITEM, SET_ACTIVE_STATUS, SHOW_CAT } from "../types";
import { cards } from "../../data/cards";

const initialState = {
  cards: cards,
  activeCard: 0,
  showCat: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STATUS:
      return {
        ...state,
        activeCard: state.activeCard === action.payload ? 0 : action.payload,
      };

    case SHOW_CAT:
      return {
        ...state,
        showCat: !state.showCat,
      };

    case ADD_CARD_ITEM:
      return {
        ...state,
        cards: [...state.cards, { id: state.cards.length + 1 }],
      };

    default:
      return state;
  }
};

export default cardsReducer;
