const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let instance = null;

let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });


  class DBService {
    static getDbServiceInstance() {
        return instance ? instance : new DBService();
    }
    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM todolists;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async insertNewName(name) {
        try {
            const dateAdded = new Date().toLocaleDateString();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO todolists (name, dateCreated) VALUES (?,?);";
                connection.query(query, [name, dateAdded] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    //console.log(result);
                    resolve(result.insertId);
                })
            });
            return {
                toDoList_id : insertId,
                name : name,
                dateCreated : dateAdded
            };
        } catch (error) {
            console.log(error);
        }
    }
    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE todolists SET name = ? WHERE toDoList_id = ?";
                connection.query(query, [name, id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteRowById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM todolists WHERE toDoList_id = ?";
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    //console.log(result);
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
  }

  module.exports = DBService;