import {LISTING_LIST_REQUEST,LISTING_LIST_SUCCESS,LISTING_LIST_FAIL} from "../types/listingTypes";
 import axios from "axios"
        
export const listListing = () => async (dispatch) => {
    try{
        dispatch({type: LISTING_LIST_REQUEST})
        const {data} = await axios.get("http://localhost:5000/listings");
        console.log("Fetched Data from API:", data); // Debugging 

        dispatch({type:LISTING_LIST_SUCCESS, payload : data })
    } catch(error){
        console.error("API Fetch Error:", error); // Debugging 
        dispatch({type:LISTING_LIST_FAIL, payload : error})
    }
}