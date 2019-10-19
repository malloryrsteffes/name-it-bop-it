// Makes the Message Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
    // Creates a "Messages" model that matches up with DB
    var Message = sequelize.define("Message", {
      author: DataTypes.STRING,
      body: DataTypes.STRING,
      createdAt: DataTypes.DATE
    });
    return Message;
  };