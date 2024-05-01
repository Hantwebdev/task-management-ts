"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRadomNumber = exports.generateRadomString = void 0;
const generateRadomString = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i <= length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRadomString = generateRadomString;
const generateRadomNumber = (length) => {
    let result = "";
    const characters = "0123456789";
    for (var i = 0; i <= length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.generateRadomNumber = generateRadomNumber;
