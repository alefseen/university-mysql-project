module.exports = (sequelize, DataTypes) => {
	const person = sequelize.define('person', {
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

	person.associate = function (models) {
		person.belongsTo(models.student, {
			foreignKey: 'student_id',
			as: 'student',
			allowNull:true,
		});
		person.belongsTo(models.instructor, {
			foreignKey: 'instructor_id',
			as: 'instructor',
			allowNull:true,
		});
	};
	return person;
};
