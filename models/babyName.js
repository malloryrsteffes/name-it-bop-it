module.exports = function(sequelize, DataTypes) {
    var babyName = sequelize.define("baby_name", {
      birthYear: DataTypes.STRING,
      gender: DataTypes.STRING,
      origin: DataTypes.STRING,
      name: DataTypes.STRING,
      region:DataTypes.STRING,
      popularity: DataTypes.INTEGER,
      value: DataTypes.INTEGER
    });
    return babyName;
  };