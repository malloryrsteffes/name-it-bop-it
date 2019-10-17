module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    breed: DataTypes.STRING,
    color: DataTypes.STRING,
    species: DataTypes.STRING
  });
  return Pet;
};
