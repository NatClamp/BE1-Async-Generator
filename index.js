const fs = require('fs')

function cb () {
    console.log('complete')
}

function elMakeDirectory (path, callBack) {
    fs.mkdir(path, function(err){
        if (err){console.log(callBack(err))}
        else {
            callBack()
        }
    })
}



function elCreateFile(path, data, callBack){
    fs.writeFile(path, data, function(err){
        if (err) console.log(callBack(err))
        else {
            callBack()
        }
    })
}











function generate(path, data, cb){
elMakeDirectory(path, cb)
elCreateFile(`${path}/index.js`, data, cb)
elCreateFile(`${path}/readme.md`, data, cb)
elCreateFile(`${path}/eslint.config`, data, cb)
elCreateFile(`${path}/.gitignore`, data, cb)
elCreateFile(`${path}/package.json`, jsonFileData, cb)
elMakeDirectory(`${path}/spec`, cb)
elCreateFile(`${path}/spec/index.spec.js`, data, cb)


}


const jsonFileData = `{
    "name": "generator",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }`

generate('./Test', '', cb)