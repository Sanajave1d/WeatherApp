import { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, options } from "../../Api";

export type CityOption = {
  value: string;
  label: string;
  latitude: number;
  longitude: number;
};

type SearchProps = {
  onSearchChange: (city: CityOption) => void;
};

const defaultCity: CityOption = {
  value: "lahore",
  label: "Lahore, PK",
  latitude: 31.5204,
  longitude: 74.3587,
};

const Search = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState<CityOption | null>(defaultCity);
  
  useEffect(() => {
    onSearchChange(defaultCity);
  }, []);

  const loadOptions = (inputVal: string) => {
    if (inputVal.length < 3) {
      return Promise.resolve({
        options: [],
      });
    }
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputVal}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map(
            (city: any): CityOption => ({
              value: city.id,
              label: `${city.name}, ${city.countryCode}`,
              latitude: city.latitude,
              longitude: city.longitude,
            }),
          ),
        };
      });
  };

  const handleOnChange = (searchData: CityOption | null) => {
    if (!searchData) return;
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      styles={{
        option: (provided) => ({
          ...provided,
          color: "black",
        }),
      }}
      loadOptions={loadOptions}
      onChange={handleOnChange}
    />
  );
};

export default Search;
