import { useEffect, useState } from "react"; // Importing React hooks (unused in this snippet)
import { AsyncPaginate } from "react-select-async-paginate"; // Import for the AsyncPaginate component
import { GEO_API_URL, geoApiOptions } from "../../api"; // Import API URL and options for geo API

// Defining the Search component with a prop for handling search changes
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null); // State to store the current search data

  // Function to load options for the search. It is asynchronous.
  const loadOptions = async (inputValue) => {
    try {
      // Fetching data from the GEO_API_URL based on the input value
      const response = await fetch(
        `${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}&limit=10`,
        geoApiOptions
      );
      const json = await response.json(); // Parsing the response as JSON

      // Mapping the fetched data to a format suitable for the dropdown
      const options = json.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));

      return { options }; // Returning the options for the dropdown
    } catch (error) {
      console.error(error);
      return { options: [] }; // Returning an empty array if there's an error
    }
  };

  // Function to handle the change in the search input
  const handleOnChange = (searchData) => {
    setSearch(searchData); // Updating the state with the new search data
    onSearchChange(searchData); // Propagating the change to the parent component
  };

  // Rendering the AsyncPaginate component
  return (
    <AsyncPaginate
      placeholder="Search for city" // Placeholder text for the search bar
      debounceTimeout={600} // Timeout for debouncing the search input
      value={search} // Current value of the search
      onChange={handleOnChange} // Function to call when the search changes
      loadOptions={loadOptions} // Function to load options based on the input
    />
  );
};

export const londonWeather = {};

export default Search; // Exporting the Search component
