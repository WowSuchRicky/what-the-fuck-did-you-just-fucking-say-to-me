import "babel-polyfill";
import openpgp from "../openpgp.min.js";

// current chat class: _23_m
// current chat's messages: _58n

export default class EncryptMessages {

    constructor(data, passwords, armor) {
        this.options = {}
        this.options.data = data;
        this.options.passwords = passwords;
        this.options.armor = armor;
    }

    async addDecryptClassTagAsync() {
        let codeSnippets = document.getElementsByClassName("_wu0");
        for(let message of codeSnippets) {
            message.getElementsByTagName("div")[0].className += " dec";
        }

        let messages = document.getElementsByClassName("_58nk");
        for(let message of messages) {
            message.className += " dec"
        }
    }

    async encryptMessagesAsync() {
        await addDecryptClassTagAsync();

        let decMessages = document.getElementsByClassName("dec");
        for(let decMessage of decMessages) {
            openpgp.encrypt(options).then((ciphertext) => {
                let encrypted = ciphertext.message.packets.write();
                decMessage.innerHTML = encrypted;
            })
        }
    } 
};