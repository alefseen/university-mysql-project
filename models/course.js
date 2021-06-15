module.exports = (sequelize, DataTypes) => {
	const course = sequelize.define('course', {
		id: {
			type: DataTypes.INTEGER(8),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		}, 
		credits: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			validate: {
			  min: 0,
			},
		},
	}, {
        timestamps: false,
	});
	course.associate = function (models) {
		course.belongsTo(models.department, {
			foreignKey: 'dept_id',
			as: 'department',
			allowNull:true,
		});
		course.hasMany(models.section, {
			foreignKey: 'course_id',
			as: 'sections',
		});
		course.belongsToMany(models.course, {
            through:models.prereq,
            as:'prereqs',
		});
	};
	return course;
};
