
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';

const LocationInput = ({ value, onChange }) => {
  const listingList = useSelector((state) => state.listingList);
  const { listings = [] } = listingList;

  const uniqueCities = useMemo(() => {
    const cities = [...new Set(listings.map((listing) => listing.city).filter(Boolean))];
    return cities.map((city) => ({ value: city, label: city }));
  }, [listings]);

  const loadOptions = (input, callback) => {
    const filtered = uniqueCities.filter((city) =>
      city.label.toLowerCase().includes(input.toLowerCase())
    );
    callback(filtered);
  };

  return (
    <div className="p-2">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions={uniqueCities}
        onChange={(option) => onChange(option ? option.value : '')}
        value={uniqueCities.find((city) => city.value === value) || null}
        placeholder="Search destinations"
        className="w-full"
        menuPortalTarget={document.body} // Ensure menu stays above other elements
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          control: (base) => ({ ...base, borderRadius: '0.5rem', padding: '0.25rem' }),
        }}
      />
    </div>
  );
};

export default LocationInput;