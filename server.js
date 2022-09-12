const http = require('http');
const fs = require('fs');
const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate')


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

// Data 

const dataFile = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(dataFile);


const slugs = dataObj.map(el => slugify(el.productName, {lower: true}))


const server = http.createServer((req, res) =>{
    const pathName = req.url;
    const {query, pathname} = url.parse(req.url, true);

    // overview page 
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {'Content-Type': 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');


        const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
        res.end(output);

    } else if(pathname === '/product'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    }else if( pathname === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    }else{
        res.writeHead(404,{
            'Content-Type': 'text/html', 
            'my-own-header': 'Hello World'
        });
        res.end('<h1>Page Not Found!</h1>');
    }
    
})



server.listen(8000, () =>{
    console.log('Server is listening on port 8000');
})