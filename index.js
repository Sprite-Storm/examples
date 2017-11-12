var fs = require('fs');

var rootSrc = 'examples';

var dataFile = {};
var sidebar = [];

console.log('running example compiler');

fs.readdirSync(rootSrc).forEach(function(file) {

    if(isDirectory(rootSrc + '/' + file)) {
        processDirectory(rootSrc + '/' + file, file);
    }

    fs.writeFile('examplesData.json', JSON.stringify(dataFile, null, 4));
    fs.writeFile('sidebarData.json', JSON.stringify(sidebar, null, 4));
});

function processDirectory(path, parentName) {
    
    var data = [];

    if (!fs.existsSync('dist/' + parentName)){
        fs.mkdirSync('dist/' + parentName);
    }

    fs.readdirSync(path).forEach( function(file) {
        if(isDirectory(path + '/' + file)) {
            
            if (!fs.existsSync('dist/' + parentName + '/' + file)){
                fs.mkdirSync('dist/' + parentName + '/' + file);
            }

            getExampleData(path + '/' + file, data, parentName, 'dist/' + parentName + '/' + file);
        }
    });

    if (fs.existsSync(path + '/data.json')) {
        var jsonData = JSON.parse(fs.readFileSync(path + '/data.json', 'utf8'));
        sidebar.push({
            active: jsonData.active, 
            name: jsonData.name, 
            uri: jsonData.uri,
            count: Object.keys(data).length
        });
    } else {
        console.error('ERROR - no data.json found for:', parentName);
    }

    // dataFile.push(data);
    dataFile[parentName] = data;
}

function getExampleData(path, data, parent, distFolder) {
    if (fs.existsSync(path + '/data.json')) {

        var contents = JSON.parse(fs.readFileSync(path + '/data.json', 'utf8'));

        for(var i = 0; i < contents.tabs.length; i++) {
            var tab = contents.tabs[i];
            if(tab.value) {
                contents.tabs[i].value = tab.value;
            } else {
                var tabSrcPath = path + '/' + tab.src_file;
                if(isPath(tabSrcPath)) {
                    var tabSrc = fs.readFileSync(path + '/' + tab.src_file, 'utf8');
                    contents.tabs[i].value = tabSrc.split("\n");
                } else {
                    console.error('ERROR - File not found: ', tab.src_file, 'in example:', path);
                }
            }
        }
        
        fs.createReadStream(path + '/dist/thumb.png').pipe(fs.createWriteStream(distFolder + '/thumb.png'));
        fs.createReadStream(path + '/dist/game.js').pipe(fs.createWriteStream(distFolder + '/game.js'));
        

        contents.scriptSrc = 'game.js';
        contents.thumb = '/' + path + '/thumb.png';
        contents.url = parent + '/' + contents.uri;
        contents.parent = parent;
        data.push(contents);
    } else {
        console.error('No data.json found for', path);
    }
}

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}

function isPath(path) {
    return fs.lstatSync(path).isFile();
}