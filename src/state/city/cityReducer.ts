import { SET_CITY } from "./cityTypes";

const initialState = {
  city: "",
};

interface CityState {
  city: string;
}

export default function cityReducer(
  state: CityState = initialState,
  action: any
) {
  switch (action.type) {
    case SET_CITY:
      return {
        position: action.payload,
      };
    default:
      return state;
  }
}
