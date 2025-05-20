import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/listingTypes";

const initialState = {
  listings: [], // Ensure initial state is an array
  bookings: [], // Optional, if bookings are fetched
  loading: false,
  error: null,
};
export const listingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LISTING_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        listings: Array.isArray(action.payload.listings)
          ? action.payload.listings
          : action.payload, // Fallback for direct array payload
        bookings: action.payload.bookings || [],
      };
    case LISTING_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        listings: Array.isArray(action.payload) ? action.payload : [],
      };
    default:
      return state;
  }
};

// export const listingListReducer = (state = initialState, action) => {
//   console.log("Action Dispatched:", action); // Log dispatched action

//   switch (action.type) {
//     case LISTING_LIST_REQUEST:
//       return { loading: true, listings: [] };

//     case LISTING_LIST_SUCCESS:
//       console.log("State after success:", action.payload); // Log payload
//       return { loading: false, listings: action.payload };

//     case LISTING_LIST_FAIL:
//       console.log("Error:", action.payload); // Log error
//       return { loading: false, error: action.payload };

//       case 'SET_SEARCH_RESULTS':
//       return { ...state, listings: action.payload };

//     default:
//       return state;
//   }
// };
