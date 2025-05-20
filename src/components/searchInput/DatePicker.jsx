
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = ({ dateRange, onChange, onClose }) => {
  const [ranges, setRanges] = useState([
    {
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      key: 'selection',
    },
  ]);

  return (
    <div className=" bg-white rounded-lg">
      <DateRange
        editableDateInputs
        onChange={(item) => {
          setRanges([item.selection]);
          onChange({
            startDate: item.selection.startDate,
            endDate: item.selection.endDate,
          });
        }}
        moveRangeOnFirstSelection={false}
        ranges={ranges}
        minDate={new Date()}
        className=" rounded-lg"
        preventScroll={true} // Prevent scroll interference
      />
      <button
        onClick={onClose}
        className=" bg-pink-500 text-white rounded-lg w-full"
      >
        Done
      </button>
    </div>
  );
};

export default DatePicker;