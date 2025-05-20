export const DELAY_MS = 500;

const delay = (ms: number = DELAY_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default delay;
