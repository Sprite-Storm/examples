var fs = require('fs');
var rmdir = require('rmdir');

var rootSrc = 'examples';

console.log('running example cleanup');

fs.readdirSync(rootSrc).forEach(function(file) {
    if(isDirectory(rootSrc + '/' + file)) {
        secondLayer(rootSrc + '/' + file);
    }
});

function secondLayer(path) {
    fs.readdirSync(path).forEach( function(file) {
        if(isDirectory(path + '/' + file)) {
            var nodeModulesPath = path + '/' + file + '/node_modules';
            var publicPath = path + '/' + file + '/public';
            var lightningJS = path + '/' + file + '/static/js/lightning.min.js';
            rmdir(nodeModulesPath, function (err, dirs, files) {});
            rmdir(publicPath, function (err, dirs, files) {});
            if (fs.existsSync(lightningJS)) {
                fs.unlinkSync(lightningJS);
            }
        }
    });
}

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}