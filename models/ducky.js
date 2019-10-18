// Makes the Ducky Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  // Creates a "Ducky" model that matches up with DB
  var Ducky = sequelize.define("Ducky", {
    name: DataTypes.STRING
  });
  return Ducky;
};
