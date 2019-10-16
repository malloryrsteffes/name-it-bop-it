module.exports = function(sequelize, DataTypes) {
  var carName = sequelize.define("car_name", {
    name: DataTypes.STRING
  });
  return carName;
};
