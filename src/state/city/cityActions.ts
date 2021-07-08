import { SET_CITY } from "./cityTypes";

type SetCity = { type: string; payload: string };

export function setCity(city: string): SetCity {
  return {
    type: SET_CITY,
    payload: city,
  };
}