module.exports = (sequelize, DataTypes) => {
  const classroom = sequelize.define(
    "classroom",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      building: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      room_number: {
        type: DataTypes.STRING(7),
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
    },
    {
      indexes: [
        { 
          unique: true,
          fields: ["building", "room_number"],
        },
      ],
      timestamps: false,
    }
  );

  return classroom;
};
