var fs = require('fs');

var rootSrc = 'examples';

var dataFile = {};

fs.readdirSync(rootSrc).forEach(function(file) {
    if(isDirectory(rootSrc + '/' + file)) {
        processDirectory(rootSrc + '/' + file, file);
    }
    fs.writeFile('output.json', JSON.stringify(dataFile, null, 4));
});

function processDirectory(path, parentName) {
    var data = {name: path, examples: {}, count: 0};
    fs.readdirSync(path).forEach( function(file) {
        if(isDirectory(path + '/' + file)) {
            getExampleData(path + '/' + file, data);
        }
    });
    data.count = Object.keys(data.examples).length;
    dataFile[parentName] = data;
}

function getExampleData(path, data) {
    if (fs.existsSync(path + '/data.json')) {
        var contents = JSON.parse(fs.readFileSync(path + '/data.json', 'utf8'));
        contents['scriptSrc'] = path + '/public/js/game.js'
        data['examples'][contents.uri] = contents;
    } else {
        console.error('No data.json found for', path);
    }
}

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}