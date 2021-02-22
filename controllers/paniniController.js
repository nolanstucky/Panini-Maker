// Dependencies
const express = require("express");

// Create the router for the app, and export the router at the end of your file.
const router = express.Router();

const panini = require("../models/panini.js")

// Create routes
//Route that grabs all of the panini data from the db and renders it to index.handlebars
router.get('/', function (req, res) {
    panini.all(function(data) {
        console.log(data);
        var obj = {
          paninis: data
        }
        res.render("index", obj);
    });   
});

//Route that updates the db with req.body.eaten
router.put("/api/panini/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(condition);
    panini.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//Route that creates a new panini with the info from req.body
router.post("/api/panini", function(req, res) {
  console.log(req.body);
    panini.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
//Route that takes panini id and deletes it from the db
router.delete("/api/panini/:id", function(req,res){
  var condition = `id = ${req.params.id}`;
  console.log(req.params.id)
  panini.delete(condition, function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})
// Export routes for server.js to use.
module.exports = router;
