import "babel-polyfill";
import openpgp from "openpgp";

// current chat class: _23_m
// current chat's messages: _58nk
 
async function addDecryptClassTag() {
    let codeSnippets = document.getElementsByClassName("_wu0");
    for(let message of codeSnippets) {
        message.getElementsByTagName("div")[0].className += " dec";
    }

    let messages = document.getElementsByClassName("_58nk");
    for(let message of messages) {
        message.className += " dec"
    }
}

function encryptMessages() {
    var decMessages = document.getElementsByClassName("dec");
    for(let decMessage of decMessages) {
        decMessage.innerHTML = "( ͡° ͜ʖ ͡°)"
    }
}

(async function(){
    await addDecryptClassTag();
    encryptMessages();
})();