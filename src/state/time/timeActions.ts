import { SET_TIME_PERIOD } from "./timeTypes";

type TimeAction = {
  type: string;
  payload: number;
};

export function setTimePeriod(time: number): TimeAction {
  return {
    type: SET_TIME_PERIOD,
    payload: time,
  };
}
