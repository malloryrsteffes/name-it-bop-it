module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    name: DataTypes.STRING
  });
  return Pet;
};
