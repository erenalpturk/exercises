const figlet = require('figlet');

const text = 'Hello, Figlet!';
figlet(text, (err, data) => {
    if (err) {
        console.error('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});