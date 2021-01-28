
var orm = require("../config/orm.js");

var panini = {
    all: function(cb) {
        
        orm.all("panini", function(res) {
            cb(res);
        });
    },

    update: function(id, cb) {
        orm.update("panini", id, cb);  
    
    },

    create: function(name, cb) {
        orm.create("panini", name, cb);
    },

};

module.exports = panini;