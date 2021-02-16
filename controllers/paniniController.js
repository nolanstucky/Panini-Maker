// Dependencies
const express = require("express");

// Create the router for the app, and export the router at the end of your file.
const router = express.Router();

const paninis = require("../models/panini.js")

// Create routes

router.get('/', function (req, res) {
    paninis.all(function(data) {
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
    paninis.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


router.post("/api/panini", function(req, res) {
    paninis.create([
      "name", "eaten"
    ], [
      req.body.name, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


// Export routes for server.js to use.
module.exports = router;
