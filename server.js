var generator = require('generate-password');
const generatePassword = require('password-generator');

var password = generator.generate({
	length:6,
	numbers: true,
   lowercase: false,
    uppercase: false,
    // excludeSimilarCharacters: false,
    // exclude: false,
    // strict: false
});

            // const code  = generatePassword(6, false, /[\d]/);
            // // static generateOtp() {
            // //     return generatePassword(6, false, /[\d]/);
            // // }

// 'uEyMTw32v9'
console.log(password);