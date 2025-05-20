
const GuestsSelector = ({ value, onChange }) => {
  const { adults = 1, children = 0 } = value;

  const handleChange = (type, delta) => {
    const newValue = {
      adults: type === 'adults' ? Math.max(0, adults + delta) : adults,
      children: type === 'children' ? Math.max(0, children + delta) : children,
    };
    onChange(newValue);
  };

  return (
    <div className="p-4 bg-white rounded-lg w-70 shadow-lg">
      {/* Adults */}
      <div className="flex items-center justify-between mb-4 w-68">
        <div>
          <span className="text-sm font-semibold ">Adults</span>
          <p className="text-xs text-gray-500">Ages 13 or above</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleChange('adults', -1)}
            className="px-2 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={adults <= 0}
          >
            -
          </button>
          <span className="w-8 text-center">{adults}</span>
          <button
            onClick={() => handleChange('adults', 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex items-center justify-between w-68">
        <div>
          <span className="text-sm font-semibold">Children</span>
          <p className="text-xs text-gray-500">Ages 2–12</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleChange('children', -1)}
            className="px-2 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={children <= 0}
          >
            -
          </button>
          <span className="w-8 text-center">{children}</span>
          <button
            onClick={() => handleChange('children', 1)}
            className="px-2 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsSelector;