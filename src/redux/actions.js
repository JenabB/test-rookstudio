import { ADD_CARD_ITEM, SET_ACTIVE_STATUS, SHOW_CAT } from "./types";

export const addCardItem = () => ({
  type: ADD_CARD_ITEM,
});

export const setActiveStatus = (id) => ({
  type: SET_ACTIVE_STATUS,
  payload: id,
});

export const setShowCat = () => ({
  type: SHOW_CAT,
});
