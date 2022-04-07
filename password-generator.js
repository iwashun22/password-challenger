'use strict';

// Generate safe password

const length = 12;
const charset = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';

function generatePassword() {
   let password = '';
   for(let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
   }
   const includeAllTypes = 
      /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);
   return includeAllTypes ? password : generatePassword();
}

console.log(generatePassword());