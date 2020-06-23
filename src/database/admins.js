const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/clients.db');

module.exports = dbAdmins;

db.serialize(()=>{
    db.run(`
        CREATE TABLE IF NOT EXISTS admins(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            phone TEXT,
            password TEXT,
        )
    `);
    
    const query = `
            INSERT INTO clients(
                email,
                phone,
                password
            ) VALUES (?, ?, ?)
    `;
    const values = [
        'jeangames15@gmail.com',
        '984952690',
        'Ksa89224495',
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

