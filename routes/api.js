/*
*
*
*       Complete the API routing below
*
*
*/

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");
var fetch = require("node-fetch");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    // Handling invalid query
    if (initUnit === "invalid unit" && initNum === "invalid number") {
      return res.status(400).send("invalid number and unit");
    } else if (initNum === "invalid number") {
      return res.status(400).send(initNum);
    } else if (initUnit === "invalid unit") {
      return res.status(400).send(initUnit);
    }
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    res
      .json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      })
      .catch(err => console.log(err));
  });
};
