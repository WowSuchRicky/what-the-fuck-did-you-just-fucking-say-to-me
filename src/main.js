import Encrypt from "./encrypt.js"

(async function(){
    let encrypt = new Encrypt(new Uint8Array([0x01, 0x01, 0x01]), ['secret stuff'], false);

    await encrypt.addDecryptClassTagAsync();
    encrypt.encryptMessages()
})(); 
