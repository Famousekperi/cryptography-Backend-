const fs = require ('fs');
const filePath = './comp.txt'

fs.writeFile(filePath, 'vision to graduate practical and theoritical sound students who can compete ', function(err){
    if(err){
        console.log('ErrorMessage', err);
        return;
    }
        
    });
    
    // fs.readFile(path, options, callback )
    fs.readFile (filePath, {encoding:'utf8'} ,function(err,data){
        if(err){
            console.log('ErrorMessage', err);
            
            return;
        }
        console.log ("DATA", data);
        
const crypto = require ('crypto');
const algo = "aes-256-cbc";
const initVector = crypto.randomBytes(16);
// const secKey = crypto.randomBytes(32);
const secKey = 'REtgV24bDB7xQYoMuypiBASMEaJbc59=';
const cipher = crypto.createCipheriv(algo,secKey, initVector);
const message = data
let encryptedData = cipher.update(message, 'utf-8', 'hex');
encryptedData += cipher.final('hex')
console.log("Encrypted Data:", encryptedData);
// console.log (secKey)    

fs.writeFile('./encrypt.txt', encryptedData , function(err){
    if(err){
        console.log('ErrorMessage', err);
        return;
    }
        
    }); 
    fs.readFile (filePath, {encoding:'utf8'} ,function(err,data){
        if(err){
            console.log('ErrorMessage', err);
            
            return;
        }});             
        
    let decipher = crypto.createDecipheriv(algo, secKey, initVector);
    let decryptedData = decipher.update(encryptedData, 'hex' , 'utf8')

    decryptedData += decipher.final('utf8')
    console.log('decrypted dATa', decryptedData)

    fs.writeFile(  './decryptedFile.txt' , decryptedData, function(err) {
    if(err){
        console.log(`error`, err);
    }})

});

    