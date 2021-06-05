module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define(
    "department",
    {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dept_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      building: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      budget: {
        type: DataTypes.FLOAT(12,2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      timestamps: false,
    }
  );
	department.associate = function (models) {
    department.hasMany(models.course, {
			as: "courses",
			foreignKey:"dept_name",
		  });
    department.hasMany(models.instructor, {
      as: "instructors",
      foreignKey:"dept_name",
      });
	};
  return department;
};