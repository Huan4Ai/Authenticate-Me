'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    questionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: "userId" });
    Answer.belongsTo(models.Question, { foreignKey: "questionId" });
  };
  return Answer;
};
