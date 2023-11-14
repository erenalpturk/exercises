const fs = require('fs');

const content = 'This is the content that will be written to the file.';

fs.writeFile('example.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('It is an error which writing the file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});
