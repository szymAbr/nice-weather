import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { NavDropdown } from "react-bootstrap";
import { fetchWeatherByCity, resetWeatherState } from "../state";

export default function LastSearches() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const history = useSelector((state: RootState) => state.history.history);
  const dispatch = useDispatch();

  function handleClick(city: string) {
    dispatch(resetWeatherState());
    dispatch(fetchWeatherByCity(city));
  }

  useEffect(() => {
    setSearchHistory(history);
  }, [history]);

  return (
    <>
      {searchHistory !== [] ? (
        searchHistory.map((city: string) => (
          <div key={city + Math.random()}>
            <NavDropdown.Item onClick={() => handleClick(city)}>
              {city}
            </NavDropdown.Item>
          </div>
        ))
      ) : (
        <NavDropdown.Item>{`(no recent searches)`}</NavDropdown.Item>
      )}
    </>
  );
}
