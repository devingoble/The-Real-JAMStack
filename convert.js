const conv = require('svg-to-png');
const path = require('path');
const svgFolder = path.join(__dirname, 'svg');
const pngFolder = process.argv[2];
const options = {
    defaultWidth: '128px',
    defaultHeight: '128px'
};

conv.convert(svgFolder, pngFolder, options)
    .then(function() {
        console.log('done');
    });