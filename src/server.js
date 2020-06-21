const express = require('express');
const server = express();
const db = require('./database/db.js');
//const dbNumbers = require('./database/dbNumbers.js');
//const dbReserved = require('./database/dbReserved.js');

server.use(express.static('public'));
server.use(express.urlencoded({
    extended: true
}));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/users', (req, res) => {

    db.all('SELECT * FROM numbers', function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length

        return res.render('users.html', {
            numbers: rows,
            total: total
        });
    });

}); 

server.post('/', (req, res) => {
    const query = `
        INSERT INTO clients(
            name,
            email,
            phone,
            numbers,
            confirmed
            ) VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.numbers,
        false
    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send('Erro de cadastro');
        }

        console.log(this);

        return res.render('index.html', { saved: true });
    }

    const toDelete = req.body.numbers.split(',');
    console.log(toDelete);


    /*dbNumbers.run(`DELETE FROM numbers WHERE id = ${parseInt(toDelete)}`, [], function (err) {
        if (err) {
            return console.log(err);
        }
    });*/

    const queryReserved = `
    INSERT INTO reserved(
        number
        ) VALUES (?)
    `;

    const valuesReserved = [
        req.body.numbers
    ]

    db.run(queryReserved, valuesReserved);
    db.run(query, values, afterInsertData);
});


//apagar deposi
server.get('/us', (req, res) => {

    db.all('SELECT * FROM reserved', function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length

        return res.render('us.html', {
            reserved: rows,
            total: total
        });
    });
});

server.get('/painel', (req, res) => {
    
    db.all('SELECT * FROM clients', function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length

        return res.render('painel.html', {
            clients: rows,
            total: total
        });
    });
});

server.post('/painel', (req, res) =>{
    const id = req.body.update

    db.all(`
        UPDATE clients SET confirmed=? WHERE id=?
    `,[true, id], function (err, rows){
        if (err) {
            return console.log(err);
        }
        db.all('SELECT * FROM clients', function (err, rows) {
            if (err) {
                return console.log(err);
            }
    
            const total = rows.length
    
            return res.render('painel.html', {
                clients: rows,
                total: total
            });
        });
    });
    console.log(id)
    
});

server.listen(3000);
