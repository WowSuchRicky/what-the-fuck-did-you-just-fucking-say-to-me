export default class FacebookScraper {

    static GetMessages() {
        return document.getElementsByClassName("_58nk"); 
    }

    static GetCodeSnippets() {
        return document.getElementsByClassName("_wu0"); 
    }

    static GetEncryptedMessages() {
        return document.getElementsByClassName("enc"); 
    }

    static GetDecryptedMessages() {
        return document.getElementsByClassName("dec"); 
    }

    static GetuserName() {
        let profileURL = document.querySelectorAll("a._3oh-").innerHTML;
        return profileURL.substr(profileURL.lastIndexOf('/') + 1);
    }

    static GetName() {
        return document.querySelectorAll("div._3eur")[0].children[0].innerHTML;
    }
}