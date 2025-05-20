import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationInput from "./LocationInput";
import DatePicker from "./DatePicker";
import GuestsSelector from "./GuestSelector";
import { Search } from "@mui/icons-material";
import { isListingAvailable } from "../../utils/availability";
import { setSearchResults } from "../../actions/listingActions";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const listingList = useSelector((state) => state.listingList);
  const { listings = [], bookings = [] } = listingList;

  // const [dropdownStyle, setDropdownStyle] = useState({});

  const [city, setCity] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [activeSection, setActiveSection] = useState(null);
const sectionRefs = {
  location: useRef(null),
  checkin: useRef(null),
  checkout: useRef(null),
  guests: useRef(null),
};
  const openSection = (section) => {
    setActiveSection(section);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeSection &&
        Object.values(sectionRefs).every(
          (ref) => ref.current && !ref.current.contains(event.target)
        )
      ) {
        setActiveSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeSection]);

  const handleSearch = () => {
    try {
      const filteredListings = listings.filter((listing) => {
        const cityMatch = city
          ? listing.city?.toLowerCase().includes(city.toLowerCase())
          : true;
        const totalGuests = guests.adults + guests.children;
        const guestMatch = listing.bed_num
          ? listing.bed_num >= totalGuests
          : true;
        const isAvailable = bookings.length
          ? isListingAvailable(
              listing.id,
              dateRange.startDate,
              dateRange.endDate,
              bookings
            )
          : true;
        return cityMatch && guestMatch && isAvailable;
      });

      console.log("Filtered Listings:", filteredListings);
      dispatch(setSearchResults(filteredListings));
      setActiveSection(null);
    } catch (error) {
      console.error("SearchBar error:", error);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">

      <div className="bg-white rounded-full shadow-md border border-gray-400 flex items-center justify-center px-8 w-180 max-w-3xl mx-auto h-16">
     
        <div
          className="flex-1 h-full flex flex-col justify-center items-center px-4 border-r border-gray-400 cursor-pointer hover:bg-pink-200 rounded-l-full transition"
          onClick={() => openSection("location")}
        >
          <div className="text-xs font-semibold">Where</div>
          <div className="text-sm text-gray-500">
            {city || "Search destinations"}
          </div>
        </div>

        <div
          className="flex-1 h-full flex flex-col justify-center items-center relative px-4 border-r border-gray-400 cursor-pointer hover:bg-pink-200 transition"
          onClick={() => openSection("checkin")}
        >
          <div className="text-xs font-semibold">Check in</div>
          <div className="text-sm text-gray-500">
            {dateRange.startDate
              ? dateRange.startDate.toLocaleDateString()
              : "Add dates"}
          </div>
        </div>

        <div
          className="flex-1 h-full flex flex-col justify-center items-center px-4 border-r border-gray-400 cursor-pointer hover:bg-pink-200 transition"
          onClick={() => openSection("checkout")}
        >
          <div className="text-xs font-semibold">Check out</div>
          <div className="text-sm text-gray-500">
            {dateRange.endDate
              ? dateRange.endDate.toLocaleDateString()
              : "Add dates"}
          </div>
        </div>

        <div className="flex-1 h-full hover:bg-pink-200 flex rounded-r-full transition">
          <div
            className="flex-1 flex flex-col justify-center items-center px-4 cursor-pointer"
            onClick={() => openSection("guests")}
          >
            <div className="text-xs font-semibold">Who</div>
            <div className="text-sm text-gray-500">
              {guests.adults + guests.children > 0
                ? `${guests.adults + guests.children} guest${
                    guests.adults + guests.children > 1 ? "s" : ""
                  }`
                : "Add guests"}
            </div>
          </div>

  
          <div className="w-13 flex items-center">
            <div className="w-12 h-12 bg-pink-600 text-white flex items-center justify-center rounded-full hover:bg-pink-700 transition">
              <FiSearch onClick={handleSearch} className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

  
      {activeSection === "location" && (
        <div className="absolute left-0 right-0 mt-2 top-full z-10 bg-white shadow-lg rounded-lg w-64 mx-auto">
          <LocationInput value={city} onChange={setCity} />
        </div>
      )}

      {activeSection === "checkin" && (
        <div className="absolute left-0 right-0 mt-2 top-full z-10 bg-white shadow-lg rounded-lg w-fit mx-auto">
          <DatePicker
            dateRange={dateRange}
            onChange={setDateRange}
            onClose={() => setActiveSection(null)}
          />
        </div>
      )}

      {activeSection === "checkout" && (
        <div className="absolute left-0 right-0 mt-2 top-full z-10 bg-white shadow-lg rounded-lg w-fit mx-auto">
          <DatePicker
            dateRange={dateRange}
            onChange={setDateRange}
            onClose={() => setActiveSection(null)}
          />
        </div>
      )}

      {activeSection === "guests" && (
        <div className="absolute left-0 right-0 mt-2 top-full z-10 bg-white shadow-lg rounded-lg w-64 mx-auto">
          <GuestsSelector value={guests} onChange={setGuests} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
