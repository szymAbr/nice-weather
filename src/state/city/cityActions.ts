import { SET_CITY } from "./cityTypes";

export type SetCity = { type: string; payload: string };

export function setCity(city: string): SetCity {
  return {
    type: SET_CITY,
    payload: city,
  };
}