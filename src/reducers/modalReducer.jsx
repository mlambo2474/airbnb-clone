import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalType";


const initialState = {
  openClose: "closed",
  content: null,
};

export const modalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      openClose: "open",
      content: action.payload, // Store an identifier instead of a component
    };
  } else if(action.type === CLOSE_MODAL) {
    return {
      ...state,
      openClose: "closed",
      content: null,
        
    };
  }
  return state;
};
