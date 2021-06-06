module.exports = (sequelize, DataTypes) => {
	const student = sequelize.define('student', {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER(5),
			allowNull: false,
			autoIncrement: true,
		}, 
		number:{
			type: DataTypes.STRING(10),
			allowNull:false,
			unique: true,
		},
		password:{
			type: DataTypes.STRING(256),
			allowNull:false,
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
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
