const crypto = require('crypto');
const randomBytes = crypto.randomBytes(4);
const randomID = randomBytes.toString('hex');
console.log("Random ID:", randomID);