module.exports = function(sequelize, DataTypes) {
    var petName = sequelize.define("pet_name", {
      name: DataTypes.STRING
    });
    return petName;
  };