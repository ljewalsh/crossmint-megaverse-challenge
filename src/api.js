"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoalMap = exports.createCometh = exports.createSoloon = exports.createPolyanet = void 0;
var axios_1 = require("axios");
var API_BASE_URL = "https://challenge.crossmint.io/api/";
var makePostRequest = function (endpoint, body) {
    return (0, axios_1.default)({
        headers: {
            "Content-Type": "application/json",
        },
        url: API_BASE_URL + endpoint,
        method: "POST",
        data: __assign(__assign({}, body), { candidateId: process.env.CANDIDATE_ID }),
    });
};
var createPolyanet = function (row, column) {
    return makePostRequest("polyanets", { row: row, column: column });
};
exports.createPolyanet = createPolyanet;
var createSoloon = function (row, column, color) {
    return makePostRequest("soloons", {
        row: row,
        column: column,
        color: color,
    });
};
exports.createSoloon = createSoloon;
var createCometh = function (row, column, direction) {
    return makePostRequest("comeths", { row: row, column: column, direction: direction });
};
exports.createCometh = createCometh;
var getGoalMap = function () {
    return axios_1.default.get("".concat(API_BASE_URL, "map/").concat(process.env.CANDIDATE_ID, "/goal"));
};
exports.getGoalMap = getGoalMap;
