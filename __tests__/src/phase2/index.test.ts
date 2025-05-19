import { createMegaverse } from "../../../src/phase2";
import type { Cell } from "../../../src/types";
import createCell from "../../../src/phase2/createCell";
import { DELAY_MS } from "../../../src/phase2";

jest.mock("../../../src/phase2/createCell");
jest.useFakeTimers();

describe("createMegaverse", () => {
  it("waits 500ms between each call to createCell, except if the value is SPACE", async () => {
    const goalMap = [
      ["SPACE", "POLYANET"],
      ["UP_COMETH", "BLUE_SOLOON"],
    ] as Cell[][];

    const promise = createMegaverse(goalMap);

    // First call should happen immediately
    expect(createCell).toHaveBeenCalledTimes(1);
    expect((createCell as jest.Mock).mock.calls[0]).toEqual([0, 1, "POLYANET"]);

    // Verify second call hasn't happened yet
    expect(createCell).toHaveBeenCalledTimes(1);

    // Advance timer for second call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createCell).toHaveBeenCalledTimes(2);
    expect((createCell as jest.Mock).mock.calls[1]).toEqual([
      1,
      0,
      "UP_COMETH",
    ]);

    // Verify third call hasn't happened yet
    expect(createCell).toHaveBeenCalledTimes(2);

    // Advance timer for third call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createCell).toHaveBeenCalledTimes(3);
    expect((createCell as jest.Mock).mock.calls[2]).toEqual([
      1,
      1,
      "BLUE_SOLOON",
    ]);

    // Advance timer for fourth call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    await promise;
  });
});
