// Makes the Babyy Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  // Creates a "Babyy" model that matches up with DB
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
