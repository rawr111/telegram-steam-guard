"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.getConfigSync = exports.getConfig = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const fs_1 = __importDefault(require("fs"));
const getConfig = async () => {
    const config = JSON.parse(await promises_1.default.readFile("./config/config.json", "utf-8"));
    return config;
};
exports.getConfig = getConfig;
const getConfigSync = () => {
    const config = JSON.parse(fs_1.default.readFileSync("./config/config.json", "utf-8"));
    return config;
};
exports.getConfigSync = getConfigSync;
const getMessages = async () => {
    const messages = JSON.parse(await promises_1.default.readFile("./config/messages.json", "utf-8"));
    return messages;
};
exports.getMessages = getMessages;
