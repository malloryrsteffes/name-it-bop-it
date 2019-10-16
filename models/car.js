module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define("Car", {
    name: DataTypes.STRING
  });
  return Car;
};
