module.exports = function(sequelize, DataTypes) {
  var Boat = sequelize.define("Boat", {
    name: DataTypes.STRING
  });
  return Boat;
};
