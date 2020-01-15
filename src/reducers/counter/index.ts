import { INCREMENT } from "../../actions/types";

export default (state: number = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
