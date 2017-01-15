
//var openpgp = require('openpgp'); // use as CommonJS, AMD, ES6 module or via window.openpgp
//console.log(openpgp)
//openpgp.initWorker({ path:'openpgp.worker.js' }) // set the relative web worker path
//openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)

// var options, encrypted;

// options = {
//     data: new Uint8Array([0x01, 0x01, 0x01]), // input as Uint8Array (or String)
//     passwords: ['secret stuff'],              // multiple passwords possible
//     armor: false                              // don't ASCII armor (for Uint8Array output)
// };

// var enc = openpgp.encrypt(options).then(function(ciphertext) {
//     encrypted = ciphertext.message.packets.write(); // get raw encrypted packets as Uint8Array
//     alert(encrypted)

//     options = {
//         message: openpgp.message.read(encrypted), // parse encrypted bytes
//         password: 'secret stuff',                 // decrypt with password
//         format: 'binary'                          // output as Uint8Array
//     };

//     openpgp.decrypt(options).then(function(plaintext) {
//         alert(plaintext.data)
//         return plaintext.data // Uint8Array([0x01, 0x01, 0x01])
//     });
// });

import "Encrypt"

(async function(){
    let encrypt = new Encrypt(new Uint8Array([hromex01, 0x01, 0x01]), ['secret stuff'], false);

    await encrypt.addDecryptClassTag();
    encrypt.encryptMessages();
})();
