
module.exports = (sequelize, DataTypes) => {
	const instructor = sequelize.define('instructor', {
		id: {
			type: DataTypes.INTEGER(5),
			primaryKey: true,
			autoIncrement: true,
			allowNull:false,
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		}, 
		salary: {
			type: DataTypes.FLOAT(8,2),
			allowNull: false,
			validate: {
			  min: 29000,
			},
		},
	}, {
        timestamps: false,
	});
	instructor.associate = function (models) {
		instructor.belongsTo(models.department, {
			foreignKey: 'dept_id',
			as: 'department',
			allowNull:true,
		});

		instructor.belongsToMany(models.section, {
            through:models.teaches,
            as:'sections',
		});
	};
	return instructor;
};
