# Azerrisk-File-Minify

A function that minifies your javascript file. **Azerrisk-File-Minify** can be used as a CLI or can be run in your code.

### Installation

    > npm install -g azerrisk-file-minify

### Run CLI

    > azerrisk-file-minify [filepath]

### Run in your code
`azerriskFileMinify` function has 1 part: filepath, such that

    azerriskFileMinify([filepath])

##### Example

    var azerriskFileMinify = require("azerrisk-file-minify");
    
    azerriskFileMinify("./file.js");
