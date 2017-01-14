// current chat class: _23_m
// current chat's messages: _58nk

// add the class to the code snippets so we can select them easier later. It appears to not change anything about them.
// 8.7/10 hacky
var codeSnippets = document.getElementsByClassName("_wu0");
for(let message of codeSnippets) {
    message.getElementsByTagName("div")[0].className += " dec";
}

var messages = document.getElementsByClassName("_58nk");
for(let message of messages) {
    message.className += " dec"
}

var decMessages = document.getElementsByClassName("dec");
for(let decMessage of decMessages) {
    decMessage.innerHTML = "( ͡° ͜ʖ ͡°)"
}