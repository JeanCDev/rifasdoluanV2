const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/clients.db');

module.exports = db;

/*db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS clients(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            numbers TEXT,
        )
    `);

    db.run(`
            ALTER TABLE clients ADD COLUMN confirmed BOOLEAN
    `)
    
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
        'Intro',
        'Intro',
        'Intro',
        'Intro',
        'Intro'
    ];
    function afterInsertData(err){
        if(err){
            return console.log(err);
        }
        console.log('Cadastrado');
        console.log(this);
    }
    db.run(query, values, afterInsertData);
});

//numeros
/*for (i = 000; i < 500; i++) {

db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS numbers(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numbers TEXT
        )
    `);
    const query = `
        INSERT INTO numbers(
            numbers
        ) VALUES (?)
    `;
    const values = [
        i
    ];
    function afterInsertData(err){
        if(err){
            return console.log(err);
        }
        console.log('Numeros cadastrados', i);
        console.log(this);
    }
    db.run(query, values, afterInsertData);
});

}*/

//Reservados

/*db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS reserved(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number TEXT
        )
    `);
    const query = `
            INSERT INTO reserved(
                number
            ) VALUES (?)
    `;

    const values = [
    ];
    
    function afterInsertData(err){
        if(err){
            return console.log(err);
        }
        console.log('Reservados');
        console.log(this);
    }
    db.run(query, values, afterInsertData);
});*/

//Confirmados