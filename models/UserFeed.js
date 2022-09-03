const { Model, DataTypes } = require("sequelize");
const dbconn = require("../config/connection");

class UserFeed extends Model {
  // todo: may need to add some static or instance methods later...
}

UserFeed.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    feed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "feed",
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
      // description can be empty
      allowNull: true,
      validate: {
        // make sure it is between 1 and 2048 characters long
        len: [0, 2048],
      },
    },
  },
  {
    // todo: might need hooks?
    sequelize: dbconn,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userFeed",
  }
);

module.exports = UserFeed;
