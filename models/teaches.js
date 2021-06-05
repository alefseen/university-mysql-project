module.exports = (sequelize, DataTypes) => {
	const teaches = sequelize.define('teaches', {
		
	}, {
        timestamps: false,
    });
	return teaches;
};
