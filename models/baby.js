module.exports = function(sequelize, DataTypes) {
  var Baby = sequelize.define("Baby", {
    birthYear: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.STRING,
    name: DataTypes.STRING,
    popularity: DataTypes.INTEGER,
    value: DataTypes.INTEGER
  });
  return Baby;
};
