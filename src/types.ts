export type Color = "blue" | "red" | "purple" | "white";
export type Direction = "up" | "down" | "right" | "left";
export type Cometh =
  | "LEFT_COMETH"
  | "RIGHT_COMETH"
  | "UP_COMETH"
  | "DOWN_COMETH";
export type Soloon =
  | "WHITE_SOLOON"
  | "BLUE_SOLOON"
  | "PURPLE_SOLOON"
  | "RED_SOLOON";
export type Cell = "SPACE" | "POLYANET" | Cometh | Soloon;
