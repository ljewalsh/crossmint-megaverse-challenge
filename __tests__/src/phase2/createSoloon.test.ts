import axios from "axios";
import createSoloon from "../../../src/phase2/createSoloon";
import { createSoloon as createSoloonApi } from "../../../src/api";

jest.mock("../../../src/api");

describe("createSoloon", () => {
  it("callsCreateSoloonApi with the expected row, column, and color when color is WHITE", async () => {
    await createSoloon(0, 0, "WHITE_SOLOON");
    expect(createSoloonApi).toHaveBeenCalledWith(0, 0, "white");
  });
  it("callsCreateSoloonApi with the expected row, column, and color when color is RED", async () => {
    await createSoloon(1, 1, "RED_SOLOON");
    expect(createSoloonApi).toHaveBeenCalledWith(1, 1, "red");
  });
  it("callsCreateSoloonApi with the expected row, column, and color when color is BLUE", async () => {
    await createSoloon(2, 3, "BLUE_SOLOON");
    expect(createSoloonApi).toHaveBeenCalledWith(2, 3, "blue");
  });
  it("callsCreateSoloonApi with the expected row, column, and color when color is PURPLE", async () => {
    await createSoloon(5, 6, "PURPLE_SOLOON");
    expect(createSoloonApi).toHaveBeenCalledWith(5, 6, "purple");
  });
});
