var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'Localhost',

    port: 3306,

    user:"root",

    password: "Notanother1",

    database: "bamazon_db"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    start();
});

var start = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        inquirer.prompt({
            name: 'product',
            type: 'rawlist',
            message: 'What would you like to purchase?',
            choices: function(value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product);
                }
                return choiceArray;
            }
        })
    });
}      
