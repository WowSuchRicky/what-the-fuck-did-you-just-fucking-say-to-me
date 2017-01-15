// function EncryptMessage(data, passwords, armor) {
//     let options = {
//         "data": data,
//         "passwords": passwords,
//         "armor": armor
//     }

//     openpgp.encrypt(options).then((ciphertext) => {
//         let encrypted = ciphertext.message.packets.write();
//         decMessage.innerHTML = encrypted;
//         alert(encrypted);
//     });
// }



// (function() {
//     AddDecryptClassTag(() => {
//         let decryptedMessages = GetDecryptedMessages();
//         let password = "sumtinspeshil"
//         for(let message of decryptedMessages) {
//             EncryptMessage(message.innerHTML, password, false);
//         }
//     });
// })();
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.Messages);
    sendResponse({EncryptedMessages: "this is an encryptedMessage"});
});