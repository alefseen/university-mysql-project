module.exports = (sequelize, DataTypes) => {
	const student = sequelize.define('student', {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER(5),
			allowNull: false,
			autoIncrement: true,
		}, 
	}, {
        timestamps: false,
	});

	student.associate = function (models) {
		student.belongsTo(models.department, {
			foreignKey: 'dept_id',
			as: 'department',
			allowNull:false,
		});
		student.belongsToMany(models.section, {
            through:models.takes,
            as:'sections',
		});
	};
	return student;
};
