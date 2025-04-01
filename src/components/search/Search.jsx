import React, {useState} from 'react';
import "react-date-range/dist/styles.css"; //main style files
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from '@mui/icons-material/People';
import "./Search.css";
// import { DateRangeSharp } from '@mui/icons-material';
import { Button } from '@mui/material';

const Search = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
         key : "selection"
    };
    const handleSelect = (ranges) => {
      setStartDate((prev) => ranges.selection.startDate);
      setEndDate((prev) => ranges.selection.endDate);
  };
  
  return (
    <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>Number of Guest <PeopleIcon /></h2>
        {/* <input type="number" min={0} defaultValue={2} /> */}
        <input type="number" min={0} defaultValue={2} aria-label="Number of Guests" />

        <Button>Search Airbnb</Button>
        </div>
  )
}

export default Search