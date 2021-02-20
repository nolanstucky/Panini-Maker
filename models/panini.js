
var orm = require("../config/orm.js");

var paninis = {
    all: function(cb) {
        
        orm.all("paninis", function(res) {
            cb(res);
        });
    },

    update: function(obj, id, cb) {
        orm.update("paninis", obj, id, function(res){
            cb(res);
        });  
    
    },

    create: function(cols, name, cb) {
        orm.create("paninis", cols, name, function(res) {
            cb(res);
        });
    },

    delete: function(con, cb) {
        orm.delete("paninis", con, function(res){
            cb(res)
        })
    }

};

module.exports = paninis;