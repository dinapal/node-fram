// const fs = require('fs');

// const http = require('http');

// // Blocking Synchronous way
// const textInput = fs.readFileSync('./txt/input.txt', 'utf8')

// // console.log(textInput);

// const textOut = `this is what we know about the avocado: ${textInput} \n Create on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File written successfully');

// // non Blocking ASynchronous way

// fs.readFile('./txt/start.txt', 'utf8', (err, data) =>{
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=>{
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`, 'utf-8', err =>{
//                 console.log('your file has been written!');
//             })
//         })
//     })
// })
// console.log('Test Async here');


