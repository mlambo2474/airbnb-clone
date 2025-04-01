import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/listingTypes";



export const listingListReducer = (state = { listings: []}, action) => {
  console.log("Action Dispatched:", action); // Log dispatched action

  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { loading: true, listings: [] };

    case LISTING_LIST_SUCCESS:
      console.log("State after success:", action.payload); // Log payload
      return { loading: false, listings: action.payload };

    case LISTING_LIST_FAIL:
      console.log("Error:", action.payload); // Log error
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
