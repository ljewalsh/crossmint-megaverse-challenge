import { createPolyanet } from "../api";
import { Cell, Cometh, Soloon } from "../types";
import createCometh from "./createCometh";
import createSoloon from "./createSoloon";

const isCometh = (cell: string): cell is Cometh => cell.endsWith("_COMETH");
const isSaloon = (cell: string): cell is Soloon => cell.endsWith("_SOLOON");

const createCell = (rowIndex: number, columnIndex: number, cell: Cell) => {
  console.log(`Creating cell at ${rowIndex}, ${columnIndex}: ${cell}`);
  if (cell === "SPACE") {
    return;
  }
  if (cell === "POLYANET") {
    return createPolyanet(rowIndex, columnIndex);
  }
  if (isCometh(cell)) {
    return createCometh(rowIndex, columnIndex, cell);
  }
  if (isSaloon(cell)) {
    return createSoloon(rowIndex, columnIndex, cell);
  }
};

export default createCell;
