
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
    <div className="  rounded-lg text-center ">
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
        className=" rounded-lg "
        preventScroll={true} // Prevent scroll interference
      />
      <button
        onClick={onClose}
        className=" text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 scale-85"
      >
        Done
      </button>
    </div>
  );
};

export default DatePicker;