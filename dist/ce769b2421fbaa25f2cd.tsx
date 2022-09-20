"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var App_1 = __importDefault(require("./components/App"));
var client_1 = require("react-dom/client");
require("./css/About.css");
if (typeof window !== 'undefined') {
    var container = document.getElementById('app');
    var root = (0, client_1.createRoot)(container);
    root.render((0, jsx_runtime_1.jsx)(App_1.default, {}));
}
