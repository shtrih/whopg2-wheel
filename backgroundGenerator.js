const fs = require('fs');

function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);

    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        }
        else {
            files_.push(name);
        }
    }

    return files_;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getTemplate(linesCount = 150) {
    var result = '',
        imagePaths = [].concat(
            getFiles('images/accessory'),
            // getFiles('images/body'),
            getFiles('images/gun'),
            getFiles('images/hat'),
            // getFiles('images/imp'),
            // getFiles('images/leg'),
            getFiles('images/mates'),
        ),
        len = imagePaths.length
    ;

    for (let i = 0; i < linesCount; i++) {
        result += `<li class="image-grid-item-container"><img class="image-grid-item" src="${imagePaths[getRandomInt(0, len)]}" alt=""></li>\n`
    }

    return result
}

console.log(getTemplate(100));


