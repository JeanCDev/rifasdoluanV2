const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// db.serialize(()=>{
//     db.run(`
//         CREATE TABLE IF NOT EXISTS clients(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             email TEXT NOT NULL UNIQUE,
//             phone TEXT NOT NULL UNIQUE,
//             numbers TEXT NOT NULL UNIQUE,
//             payment TEXT,
//             confirmed BOOLEAN
//         )
//     `);
    
    // const query = `
    //         INSERT INTO clients(
    //             name,
    //             email,
    //             phone,
    //             numbers,
    //             payment,
    //             confirmed
    //         ) VALUES (?, ?, ?, ?, ?, ?)
    // `;
    // const values = [
    //     'Name',
    //     'Email',
    //     'Phone',
    //     'Numbers',
    //     'Payment',
    //     true
    // ];
    
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log('Cadastrado');
    //     console.log(this);
    // }
    // db.run(query, values, afterInsertData);
// });

//numeros
// for (i = 000; i < 500; i++) {

// db.serialize(()=>{

//     // db.run(`
//     //      DELETE FROM numbers WHERE id = ? 
//     // `, []);

//     db.run(`
//         CREATE TABLE IF NOT EXISTS numbers(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             number TEXT NOT NULL UNIQUE,
//             available BOOLEAN
//         )
//     `);
//     const query = `
//         INSERT INTO numbers(
//             number,
//             available
//         ) VALUES (?, ?)
//     `;
//     const values = [
//         i,
//         true
//     ];
//     function afterInsertData(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log('Numeros cadastrados', i);
//         console.log(this);
//     }
//     db.run(query, values, afterInsertData);
// });

// }

// db.serialize(()=>{

//     db.run(`
//         CREATE TABLE IF NOT EXISTS reserved(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             number TEXT NOT NULL UNIQUE
//         )
//     `);

// });