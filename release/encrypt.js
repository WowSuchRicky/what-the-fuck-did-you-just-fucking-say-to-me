"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("babel-polyfill");

var _openpgpMin = require("../openpgp.min.js");

var _openpgpMin2 = _interopRequireDefault(_openpgpMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// current chat class: _23_m
// current chat's messages: _58n

class EncryptMessages {

    constructor(data, passwords, armor) {
        this.options = {};
        this.options.data = data;
        this.options.passwords = passwords;
        this.options.armor = armor;
    }

    addDecryptClassTagAsync() {
        return regeneratorRuntime.async(function _callee$(_context) {
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
                    console.log("Hello");

                case 1:
                case "end":
                    return _context.stop();
            }
        }, null, this);
    }

    encryptMessages() {
        // let decMessages = document.getElementsByClassName("dec");
        // for(let decMessage of decMessages) {
        //     openpgp.encrypt(options).then((ciphertext) => {
        //         let encrypted = ciphertext.message.packets.write();
        //         decMessage.innerHTML = encrypted;
        //     })
        // }
        console.log("World");
    }

}exports.default = EncryptMessages;
;