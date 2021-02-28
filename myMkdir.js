#!/usr/bin/env bash

let fs= require("fs");

//fs.writeFileSync("a.txt","asdfghjkl")
(function(){
let n=process.argv[2];
let name = process.argv[3];

if(!Number.isInteger(n)  || n<=0){
    console.log("invalid")
    return
}

if(fs.existsSync(`${name}-0`)){
    for(let i=0;i<n;i++){
    fs.rmdirSync(`${name}-${i}`)
    }
}
else{
for(let i=0;i<n;i++){
    fs.mkdirSync(`${name}- ${i}`)
}
}
})();