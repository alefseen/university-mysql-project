module.exports = (sequelize, DataTypes) => {
	const section = sequelize.define('section', {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER(8),
			allowNull: false,
			autoIncrement: true,
		}, 
		semester: {
			type: DataTypes.STRING(6),
			allowNull: false,
			validate: {
				isIn:['Fall' , 'Winter', 'Spring', 'Summer'],
			},
		},
		year: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			validate: {
				min:1701,
				max:2100,
			},
		},
	}, {
        timestamps: false,
	});

	section.associate = function (models) {
		section.belongsTo(models.course, {
			foreignKey: 'course_id',
			as: 'course',
			allowNull:false,
		});
		section.belongsTo(models.classroom, {
			as: 'classroom',
			foreignKey: 'classroom_id',
			allowNull:false,
		});
		section.belongsTo(models.timeslot, {
			as: 'timeslot',
			foreignKey: 'timeslot_id',
			allowNull:false,
		});
		section.belongsToMany(models.student, {
            through:models.takes,
            as:'students',
		});
		section.belongsToMany(models.instructor, {
            through:models.teaches,
            as:'instructors',
		});
	};
	return section;
};
