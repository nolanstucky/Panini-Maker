// Import (require) connection.js
var connection = require("../config/connection.js");



var orm = {
    //collects ALL the data from the database
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
           
            if (err) throw err;
            cb(result)   
        });
    },

     
    update: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET eaten = true WHERE id = " + condition + ";",
        function(err, result) {
        if (err) throw err;
        cb(result);
        })       
    },


    create: function(tableInput, val, cb) {
            connection.query("INSERT INTO " + tableInput + " (name) VALUES ('" + val + "');",
            function(err, result) {
                if (err) throw err;
                cb(result);
            });
        }
    }

     

module.exports = orm;

