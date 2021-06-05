module.exports = (sequelize, DataTypes) => {
	const prereq = sequelize.define('prereq', {
		
	}, {
        timestamps: false,
    });
	return prereq;
};
