// Makes the Boat Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  // Creates a "Boat" model that matches up with DB
  var Boat = sequelize.define("Boat", {
    name: DataTypes.STRING
  });
  return Boat;
};
