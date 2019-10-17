module.exports = function(sequelize, DataTypes) {
  var Ducky = sequelize.define("Ducky", {
    name: DataTypes.STRING
  });
  return Ducky;
};
