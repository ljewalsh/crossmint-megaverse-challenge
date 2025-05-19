import "dotenv/config";
import phase1 from "./phase1";
import phase2 from "./phase2";

// run phase1 with expected map size + distance from edge
phase1(11, 2).then(() => {
  // once phase1 is complete, run phase2
  phase2().then();
});
