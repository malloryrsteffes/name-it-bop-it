// Makes the Pet Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  // Creates a "Pet" model that matches up with DB
  var Pet = sequelize.define("Pet", {
    name: DataTypes.STRING
  });
  return Pet;
};
