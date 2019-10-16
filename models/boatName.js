module.exports = function(sequelize, DataTypes) {
  var boatName = sequelize.define("boat_name", {
    name: DataTypes.STRING
  });
  return boatName;
};
