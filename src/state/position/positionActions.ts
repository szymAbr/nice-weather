import { SET_POSITION } from "./positionTypes";

export type PositionAction = { type: string; payload: any };

export function setPosition(position: number[]): PositionAction {
  return {
    type: SET_POSITION,
    payload: position,
  };
}