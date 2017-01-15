function FacebookScraper() { 
    this.GetMessages = function() {
        return document.getElementsByClassName("_58nk"); 
    }

    this.GetCodeSnippets = function() {
        return document.getElementsByClassName("_wu0"); 
    };

    this.GetEncryptedMessages = function() {
        return document.getElementsByClassName("enc"); 
    };

    this.GetDecryptedMessages = function() {
        return document.getElementsByClassName("dec"); 
    };

    this.GetuserName = function() {
        let profileURL = document.querySelectorAll("a._3oh-").innerHTML;
        return profileURL.substr(profileURL.lastIndexOf('/') + 1);
    }

    this.GetName = function() {
        return document.querySelectorAll("div._3eur")[0].children[0].innerHTML;
    }
}

function MessageEncrypter(data, passwords, armor) {
    this.options = {}
    this.options.data = data;
    this.options.passwords = passwords;
    this.options.armor = armor;
}

MessageEncrypter.prototype.addDecryptClassTag = function(callback) {
    let codeSnippets = FacebookScraper.GetCodeSnippets();
    for(let message of codeSnippets) {
        message.getElementsByTagName("div")[0].className += " dec";
    }

    let messages = FacebookScraper.GetMessages();
    for(let message of messages) {
        message.className += " dec"
    }

    callback();
}

MessageEncrypter.prototype.encryptMessages = function() {
    let decMessages = FacebookScraper.GetDecryptedMessages();
    for(let decMessage of decMessages) {
        openpgp.encrypt(options).then((ciphertext) => {
            let encrypted = ciphertext.message.packets.write();
            decMessage.innerHTML = encrypted;
        });
    }
}

(function(){
    let encrypter = new MessageEncrypter(new Uint8Array([0x01, 0x01, 0x01]), ['secret stuff'], false);
    encrypter.addDecryptClassTag(encrypter.encryptMessages());
})();


