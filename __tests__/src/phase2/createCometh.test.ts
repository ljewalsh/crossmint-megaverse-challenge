import axios from "axios";
import createCometh from "../../../src/phase2/createCometh";
import { createCometh as createComethApi } from "../../../src/api";

jest.mock("../../../src/api");

describe("createCometh", () => {
  it("calls createComethidApi with the expected row, column, and direction when direction is LEFT", async () => {
    await createCometh(0, 0, "LEFT_COMETH");
    expect(createComethApi).toHaveBeenCalledWith(0, 0, "left");
  });
  it("calls createComethidApi with the expected row, column, and direction when direction is RIGHT", async () => {
    await createCometh(1, 1, "RIGHT_COMETH");
    expect(createComethApi).toHaveBeenCalledWith(1, 1, "right");
  });
  it("calls createComethidApi with the expected row, column, and direction when direction is UP", async () => {
    await createCometh(2, 3, "UP_COMETH");
    expect(createComethApi).toHaveBeenCalledWith(2, 3, "up");
  });
  it("calls createComethidApi with the expected row, column, and direction when direction is DOWN", async () => {
    await createCometh(5, 6, "DOWN_COMETH");
    expect(createComethApi).toHaveBeenCalledWith(5, 6, "down");
  });
});
