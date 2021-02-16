
var orm = require("../config/orm.js");

var paninis = {
    all: function(cb) {
        
        orm.all("paninis", function(res) {
            cb(res);
        });
    },

    update: function(id, cb) {
        orm.update("paninis", id, cb);  
    
    },

    create: function(name, cb) {
        orm.create("paninis", name, cb);
    },

};

module.exports = paninis;