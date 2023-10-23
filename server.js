const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyparser = require('body-parser');


{/*I added  this code app.use(bodyParser.urlencoded({ extended: false })); to your server.js after the
installation of body-parser package: npm intsall body-parser */}

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


{/*A server application that listens on localhost:3000 and returns “Welcome to Data
Representation & Querying.*/}

{/*I add another route /test that returns a html page when Queried*/}

app.get('/name', (req, res)=>{
    console.log(req.query.fname);
    res.send('Hello' +req.query.fname+" "+req.query.lname);
})


app.post('/name', (req, res)=>{
    res.send('Data Recieved')
})

app.get('/', (req, res) => {
  res.send('Welcome to DataRepresentation & Querying')
})

app.get('/whatserver', (req,res)=>{
    res.send("Goodbye");

})

{/*I add another route point using the Express Framework that will take an argument form
the url path and return hello*/}

app.get('/Hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Hello' +req.params.name);

})

{/*I added a route point /api/books that will return the following json data*/}

app.get('/api/books', (req, res)=>{
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
        
        res.status(200).json({
            books:data
        })

})

{/*I added another route /test that returns a html page when Queried. i named the file index.html.*/}

app.get('/test', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})