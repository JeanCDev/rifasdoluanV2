const express = require('express');
const server = express();
const db = require('./database/db.js');

const meUser = {
    user: 'jeangames15@gmail.com',
    password: '984952690'
};
const luanUser = {
    user: 'luantolentino68@gmail.com',
    password: '984279540'
}

server.use(express.static('public'));
server.use(express.urlencoded({
    extended: true
}));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server.get('/numbers', (req, res) => {
    db.all('SELECT * FROM numbers', function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length

        return res.render('numbers.html', {
            numbers: rows,
            total: total
        });
    });
})

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/users', (req, res) => {

    db.all('SELECT * FROM numbers', function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length;

        return res.render('users.html', {
            numbers: rows,
            total: total
        });
    });

});

server.post('/saveuser', (req, res) => {
    const query = `
        INSERT INTO clients(
            name,
            email,
            phone,
            numbers,
            payment,
            confirmed
            ) VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.numbers,
        req.body.payment,
        false
    ];

    if (req.body.name != '' && req.body.email != '' && req.body.phone != '' && req.body.numbers != '' && req.body.payment != '') {

        const updateNumberStatus = req.body.numbers.split(',');
        for (let i = 0; i < updateNumberStatus.length; i++) {
            console.log(parseInt(updateNumberStatus[i]) + 1)
            db.run(`
                    UPDATE numbers SET available = ${false} WHERE id = ${parseInt(updateNumberStatus[i]) + 1}
                    `, [], function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }

        function afterInsertData(err) {
            if (err) {
                console.log(err);
                return res.send('Erro de cadastro');
            }

            if(req.body.payment = 'Banco do Brasil'){
                return res.render('payment.html', { 
                    saved: true, 
                    payment: 'bb' });
            } else if(req.body.payment = 'Caixa'){
                return res.render('users.html', { saved: true, payment: 'cx' });
            } else if(req.body.payment = 'NuBank'){
                return res.render('users.html', { saved: true, payment: 'nb' });
            } else{
                return res.render('users.html', { saved: true, payment: 'pp' });
            }
        }

        db.run(query, values, afterInsertData);
    }
});

server.get('/us', (req, res) => {
    return res.render('us.html');
});

server.get('/painel', (req, res) => {
    if (((req.query.login === meUser.user) && (req.query.password === meUser.password) || (req.query.login === luanUser.user && req.query.password == luanUser.password))) {

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
    } else { return res.render('us.html', { alert: 'Erro de login. Confira seus dados e tente novamente' }); }
});

server.post('/painel', (req, res) => {
    const password = req.body.password;
    const id = req.body.update;

    if ((password === meUser.password) || password === luanUser.password) {
        db.all(`
            UPDATE clients SET confirmed=? WHERE id=?
        `, [true, id], function (err) {
            if (err) {
                return console.log(err);
            }
            db.all('SELECT * FROM clients', function (err, rows) {
                if (err) {
                    return console.log(err);
                }

                const total = rows.length

                return res.render('painel.html', {
                    success: 'Status de pagamento modificado com successo',
                    clients: rows,
                    total: total
                });
            });
        });
    } else {
        db.all('SELECT * FROM clients', function (err, rows) {
            if (err) {
                return console.log(err);
            }

            const total = rows.length

            return res.render('painel.html', {
                error: 'Houve um erro ao atualizar o status do usuário, confira se colocou a senha corretamente e tente de novo',
                clients: rows,
                total: total
            });
        });
    }
});

server.listen(3000);
