import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";

export const RoomsContext = createContext();

export const RoomsContextProvider = (props) => {
  // Fetching data house
  let { data: houses } = useQuery("housesCache", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });

  // filter
  const [house, setHouse] = useState();

  const [filter, setFilter] = useState({
    name: "",
    type_rent: "",
    bedroom: "",
    bathroom: "",
    amenities: [],
    price: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const filteredHouses = houses.filter((house) => {
      return (
        (filter.name === "" || house.name === filter.name) &&
        (filter.type_rent === "" || house.rent === filter.type_rent) &&
        (filter.bedroom === "" || house.bedroom === filter.bedroom) &&
        (filter.bathroom === "" || house.bathroom === filter.bathroom) &&
        (filter.amenities.length === 0 ||
          filter.amenities.every((amenity) =>
            house.amenities.includes(amenity)
          )) &&
        (filter.price === "" || house.price <= filter.price)
      );
    });
    setHouse(filteredHouses);
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setFilter({
          ...filter,
          amenities: [...filter.amenities, e.target.name],
        });
      } else {
        setFilter({
          ...filter,
          amenities: filter.amenities.filter(
            (amenity) => amenity !== e.target.name
          ),
        });
      }
    } else if (e.target.type === "radio") {
      setFilter({ ...filter, [e.target.name]: e.target.value });
    } else {
      setFilter({ ...filter, [e.target.name]: e.target.value });
    }
  };

  return (
    <RoomsContext.Provider
      value={{
        house,
        setHouse,
        filter,
        setFilter,
        handleOnSubmit,
        handleChange,
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};
