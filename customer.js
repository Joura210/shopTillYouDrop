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
    // connection.end();
});

// var start = function() {
//     connection.query('SELECT * FROM products', function(err, res) {
        // console.log("product" | "price" );
        // inquirer.prompt({
        //     name: 'product,',
        //     type: 'input',
        //     message: 'What would you like to purchase?',
        //     choices: function(value) {
        //         var choiceArray = [];
        //         for (var i = 0; i < res.length; i++) {
        //             choiceArray.push(res[i].product);
        //         }
        //         return choiceArray;
                // after we display products, user should be able to pick an item and either add more items or checkout
        //     }
        // }).then(function(answer){
        //     console.log(answer);
        // })
        // .push()
//     });
// }      

// var cart = function(){
//     // this needs to grab the user choice and place in an array
// }

var start = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      
      for (var i = 0; i < res.length; i++) {
              console.log(res[i].product_id + " || " + res[i].product + " || " + res[i].department + " || " + " $" + res[i].price + " || " + res[i].stock);

      }
//       inquirer.prompt({
//             name: 'product',
//             type: 'input',
//             message: 'What would you like to purchase?'
           
//     }).then(function (choice){
//         for (var i = 0; i < res.length; i++){
//                 if(res[i].product_id == choice.product){

//                 }
//         }

    })
    connection.end();
  }