module.exports = (sequelize, DataTypes) => {
	const takes = sequelize.define('takes', {
		grade: {
			type: DataTypes.STRING(2),
			allowNull:true,
		},
	}, {
        timestamps: false,
    });
	return takes;
};
 