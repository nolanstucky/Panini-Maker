// Dependencies
const express = require("express");

// Create the router for the app, and export the router at the end of your file.
const router = express.Router();

const orm = require("../config/orm")

// Create routes

router.get('/', function (req, res) {
    orm.all('paninis',function(data) {
        console.log(data);
        var obj = {
          paninis: data
        }
        res.render("index", obj);
    });   
});


router.put("/api/panini/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(condition);
    orm.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


router.post("/api/panini", function(req, res) {
  console.log(req.body);
    orm.create('paninis',[
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

router.delete("/api/panini/:id", function(req,res){
  var condition = `id = ${req.params.id}`;
  console.log(req.params.id)
  orm.delete(condition, function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})
// Export routes for server.js to use.
module.exports = router;
