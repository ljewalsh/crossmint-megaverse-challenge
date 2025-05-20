import axios from "axios";

import type { Color, Direction } from "./types";

const API_BASE_URL = "https://challenge.crossmint.io/api/";

const makePostRequest = (
  endpoint: string,
  body?: Record<string, string | number>,
) => {
  return axios({
    headers: {
      "Content-Type": "application/json",
    },
    url: API_BASE_URL + endpoint,
    method: "POST",
    data: {
      ...body,
      candidateId: process.env.CANDIDATE_ID,
    },
  });
};

export const createPolyanet = (row: number, column: number) => {
  return makePostRequest("polyanets", { row, column });
};

export const createSoloon = (row: number, column: number, color: Color) => {
  return makePostRequest("soloons", {
    row,
    column,
    color,
  });
};

export const createCometh = (
  row: number,
  column: number,
  direction: Direction,
) => {
  return makePostRequest("comeths", { row, column, direction });
};

export const getGoalMap = () => {
  return axios.get(`${API_BASE_URL}map/${process.env.CANDIDATE_ID}/goal`);
};
