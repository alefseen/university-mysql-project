module.exports = (sequelize, DataTypes) => {
	const timeslot = sequelize.define('timeslot', {
		id: {
			type: DataTypes.INTEGER(4),
			primaryKey: true,
			autoIncrement: true,
			allowNull:false,
		},
		day: {
			type: DataTypes.STRING(1),
			allowNull: false,
			validate: {
				isIn:['M' , 'T', 'W', 'R', 'F', 'S', 'U'],
			},
		},
		start_time:{
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		end_time:{
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	}, 
	{
		indexes: [
		  {
			unique: true,
			fields: ["day", "start_time","end_time"],
		  },
		],
		timestamps: false,
	  }
	);
	
	return timeslot;
};
