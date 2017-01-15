import "babel-polyfill";
import openpgp from "../openpgp.min.js";
import FacebookScraper from "./facebookScraper.js"

export default class EncryptMessages {

    constructor(data, passwords, armor) {
        this.options = {}
        this.options.data = data;
        this.options.passwords = passwords;
        this.options.armor = armor;
    }

    async addDecryptClassTagAsync() {
        let codeSnippets = FacebookScraper.GetCodeSnippets();
        for(let message of codeSnippets) {
            message.getElementsByTagName("div")[0].className += " dec";
        }

        let messages = FacebookScraper.GetMessages();
        for(let message of messages) {
            message.className += " dec"
        }
    }

    async encryptMessagesAsync() {
        await addDecryptClassTagAsync();

        let decMessages = FacebookScraper.GetDecryptedMessages();
        for(let decMessage of decMessages) {
            openpgp.encrypt(options).then((ciphertext) => {
                let encrypted = ciphertext.message.packets.write();
                decMessage.innerHTML = encrypted;
            });
        }
    }
};