import phase1 from "../../../src/phase1";
import { createPolyanet } from "../../../src/api";
import { DELAY_MS } from '../../../src/delay'

jest.mock("../../../src/api");
jest.useFakeTimers();

describe("createCross", () => {
  it("waits DELAY_MSms between each call to createPolyanet", async () => {
    const promise = phase1(3, 0);

    // First call should happen immediately
    expect(createPolyanet).toHaveBeenCalledTimes(1);
    expect((createPolyanet as jest.Mock).mock.calls[0]).toEqual([1, 1]);

    // Verify second call hasn't happened yet
    expect(createPolyanet).toHaveBeenCalledTimes(1);

    // Advance timer for second call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createPolyanet).toHaveBeenCalledTimes(2);
    expect((createPolyanet as jest.Mock).mock.calls[1]).toEqual([0, 0]);

    // Verify third call hasn't happened yet
    expect(createPolyanet).toHaveBeenCalledTimes(2);

    // Advance timer for third call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createPolyanet).toHaveBeenCalledTimes(3);
    expect((createPolyanet as jest.Mock).mock.calls[2]).toEqual([0, 2]);

    // Verify fourth call hasn't happened yet
    expect(createPolyanet).toHaveBeenCalledTimes(3);

    // Advance timer for fourth call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createPolyanet).toHaveBeenCalledTimes(4);
    expect((createPolyanet as jest.Mock).mock.calls[3]).toEqual([2, 0]);

    // Verify fifth call hasn't happened yet
    expect(createPolyanet).toHaveBeenCalledTimes(4);

    // Advance timer for fifth call
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    expect(createPolyanet).toHaveBeenCalledTimes(5);
    expect((createPolyanet as jest.Mock).mock.calls[4]).toEqual([2, 2]);

    // Advance timer one last time
    await jest.advanceTimersByTimeAsync(DELAY_MS);
    await promise;
  });
});
