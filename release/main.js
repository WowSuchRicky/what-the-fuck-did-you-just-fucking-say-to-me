"use strict";

var _encrypt = require("./encrypt.js");

var _encrypt2 = _interopRequireDefault(_encrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function _callee() {
    var encrypt;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                encrypt = new _encrypt2.default(new Uint8Array([0x01, 0x01, 0x01]), ['secret stuff'], false);
                _context.next = 3;
                return regeneratorRuntime.awrap(encrypt.addDecryptClassTagAsync());

            case 3:
                encrypt.encryptMessages();

            case 4:
            case "end":
                return _context.stop();
        }
    }, null, this);
})();