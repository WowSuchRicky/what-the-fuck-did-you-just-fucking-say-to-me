function EncryptMessage(data, passwords, armor) {
    let options = {
        "data": data,
        "passwords": passwords,
        "armor": armor
    }

    let encrypted = ""
    openpgp.encrypt(options).then(function(ciphertext) {
        encrypted = ciphertext.data;
    });
    return encrypted;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.message);
    let encryptedMessage = EncryptMessage(request.message, ["sumtindckrit"], false);
    sendResponse({message: encryptedMessage});
});