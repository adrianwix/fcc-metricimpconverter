/*
*
*
*       Complete the handler logic below
*       
*       
*/
const MathJS = require("mathjs");

function ConvertHandler() {
  this.getNum = function(input) {
    let result;
    // Find index of unit
    let index = /[a-z]/.exec(input).index;
    // If index === 0 there are no number. Default 1
    if (index === 0) {
      return 1;
    }
    // Let split the input copy it from 0 to Index
    let num = input
      .split("")
      .slice(0, index)
      .join("");

    if (input.indexOf("/") == -1) {
      result = Number(num);
    } else {
      inputArr = num.split("/");
      if (inputArr > 2) {
        return "invalid number";
      }
      result = Number(inputArr[0]) / Number(inputArr[1]);
    }
    return result;
  };

  this.getUnit = function(input) {
    let result = /[a-z]*$/.exec(input)[0];
    let units = ["l", "gal", "kg", "lbs", "mi", "km"];
    if (units.indexOf(result.toLowerCase()) === -1) {
      return "invalid unit";
    } else {
      return result;
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "galones";
        break;
      case "l":
        result = "litros";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = parseFloat(initNum) * galToL;
        break;
      case "l":
        result = parseFloat(initNum) / galToL;
        break;
      case "lbs":
        result = parseFloat(initNum) * lbsToKg;
        break;
      case "kg":
        result = parseFloat(initNum) / lbsToKg;
        break;
      case "mi":
        result = parseFloat(initNum) * miToKm;
        break;
      case "km":
        result = parseFloat(initNum) / miToKm;
        break;
      default:
        return res.send("Invalid unit");
        break;
    }
    /** @todo round it */
    return MathJS.round(result, 5);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result =
      initNum.toString() +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum.toString() +
      " " +
      this.spellOutUnit(returnUnit);

    return result;
  };
}

module.exports = ConvertHandler;
