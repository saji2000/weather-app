import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}&limit=10`,
        geoApiOptions
      );
      const json = await response.json(); // Parse the response as JSON

      const options = json.data.map((city) => ({
        label: city.name,
        value: city.geonameId,
      }));

      return { options }; // Return an object with an "options" property
    } catch (error) {
      console.error(error);
      return { options: [] }; // Return an empty options array on error
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
