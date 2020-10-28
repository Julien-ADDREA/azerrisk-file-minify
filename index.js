#!/usr/bin/env node
var fs = require("fs");
var Terser = require("terser");
var colors = require('colors');

var azerriskFileMinify = async function(filepath) {
    if (filepath.substr(-3) === ".js") {

        var code = fs.readFileSync(filepath, "utf8");

        await Terser.minify(code)
        .then(minified => {
            fs.writeFileSync(filepath, minified.code, "utf8");
            console.log('[1] ' + filepath + ' ... ' + 'OK'.green + ' (CONVERTED)');
        })
        .catch(error => {
            console.log('[1] ' + filepath + ' ... ' + 'ERROR'.red + ' (IGNORED)');
        });
    } else {
        console.log('[1] ' + filepath + ' ... ' + 'ERROR: File ext must be .js !'.red + ' (IGNORED)');
    }
};
if (require.main === module) {
    var input = process.argv; 
    var inputFile = input[2];
    azerriskFileMinify(inputFile);
} else {
    module.exports = azerriskFileMinify;
}