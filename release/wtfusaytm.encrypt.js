"use strict";

require("babel-polyfill");

var _openpgp = require("openpgp");

var _openpgp2 = _interopRequireDefault(_openpgp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// current chat class: _23_m
// current chat's messages: _58nk

// add the class to the code snippets so we can select them easier later. It appears to not change anything about them.
// 8.7/10 hacky
function addDecryptClassTag() {
    return regeneratorRuntime.async(function addDecryptClassTag$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                // let codeSnippets = document.getElementsByClassName("_wu0");
                // for(let message of codeSnippets) {
                //     message.getElementsByTagName("div")[0].className += " dec";
                // }

                // let messages = document.getElementsByClassName("_58nk");
                // for(let message of messages) {
                //     message.className += " dec"
                // }
                console.log("hello");

            case 1:
            case "end":
                return _context.stop();
        }
    }, null, this);
}

function encryptMessages() {
    // var decMessages = document.getElementsByClassName("dec");
    // for(let decMessage of decMessages) {
    //     decMessage.innerHTML = "( ͡° ͜ʖ ͡°)"
    // }
    console.log("world");
}

(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                _context2.next = 2;
                return regeneratorRuntime.awrap(addDecryptClassTag());

            case 2:
                encryptMessages();

            case 3:
            case "end":
                return _context2.stop();
        }
    }, null, this);
})();