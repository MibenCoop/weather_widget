import counter from "./index";
import { INCREMENT } from "./../../constants/index";

describe("Counter reducer", () => {
  it("should return default value", () => {
    const newState = counter(undefined, {});
    expect(newState).toEqual(0);
  });
  it("should return new state with increased by 1 state value", () => {
    const newState = counter(undefined, {
      type: INCREMENT
    });
    expect(newState).toEqual(1);
  });
});
