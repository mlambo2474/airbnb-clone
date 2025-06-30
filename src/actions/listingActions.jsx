import {LISTING_LIST_REQUEST,LISTING_LIST_SUCCESS,LISTING_LIST_FAIL} from "../types/listingTypes";
 import axios from "axios"
        
// export const listListing = () => async (dispatch) => {
//     try{
//         dispatch({type: LISTING_LIST_REQUEST})
//         // const {data} = await axios.get("https://airbnb-backend-vlwt.onrender.com/listings");
//         const {data} = await axios.get("http://localhost:5000/listings");
//         console.log("Fetched Data from API:", data); // Debugging 

//         dispatch({type:LISTING_LIST_SUCCESS, payload : data })
//     } catch(error){
//         console.error("API Fetch Error:", error); // Debugging 
//         dispatch({type:LISTING_LIST_FAIL, payload : error})
//     }
// }

export const listListing = () => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });
    const [listingsResponse, bookingsResponse] = await Promise.all([
      axios.get('https://airbnb-clone-fdwv.onrender.com/listings'),
      axios.get('https://airbnb-clone-fdwv.onrender.com/bookings').catch(() => ({ data: [] })) // Fallback if no bookings endpoint
    ]);
    console.log('Fetched Listings:', listingsResponse.data);
    console.log('Fetched Bookings:', bookingsResponse.data);
    dispatch({
      type: LISTING_LIST_SUCCESS,
      payload: {
        listings: listingsResponse.data,
        bookings: bookingsResponse.data,
      },
    });
  } catch (error) {
    console.error('API Fetch Error:', error);
    dispatch({ type: LISTING_LIST_FAIL, payload: error.message });
  }
};

export const setSearchResults = (listings) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: listings,
});