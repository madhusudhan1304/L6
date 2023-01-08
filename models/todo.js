"use strict";
const { Model, Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      // define association here
    }
    static addTodo({ title, dueDate }) {
      return this.create({ title: title, dueDate: dueDate, completed: false });
=======
      Todo.belongsTo(models.User, {
        foreignKey: "userId",
      });
      // define association here
    }
    static addTodo({ title, dueDate, userId }) {
      return this.create({
        title: title,
        dueDate: dueDate,
        completed: false,
        userId,
      });
>>>>>>> 6724317 (third)
    }
    markAsCompleted() {
      return this.update({ completed: true });
    }
    deletetodo() {
      return this.removetask(id);
    }
    static getTodos() {
      return this.findAll({ order: [["id", "ASC"]] });
    }
<<<<<<< HEAD
    static overdue() {
=======
    static overdue(userId) {
>>>>>>> 6724317 (third)
      return this.findAll({
        where: {
          dueDate: {
            [Op.lt]: new Date().toLocaleDateString("en-CA"),
          },
<<<<<<< HEAD
=======
          userId,
>>>>>>> 6724317 (third)
          completed: false,
        },
        order: [["id", "ASC"]],
      });
    }
<<<<<<< HEAD
    static dueToday() {
=======
    static dueToday(userId) {
>>>>>>> 6724317 (third)
      return this.findAll({
        where: {
          dueDate: {
            [Op.eq]: new Date().toLocaleDateString("en-CA"),
          },
<<<<<<< HEAD
=======
          userId,
>>>>>>> 6724317 (third)
          completed: false,
        },
        order: [["id", "ASC"]],
      });
    }
<<<<<<< HEAD
    static dueLater() {
=======
    static dueLater(userId) {
>>>>>>> 6724317 (third)
      return this.findAll({
        where: {
          dueDate: {
            [Op.gt]: new Date().toLocaleDateString("en-CA"),
          },
<<<<<<< HEAD
=======
          userId,
>>>>>>> 6724317 (third)
          completed: false,
        },
        order: [["id", "ASC"]],
      });
    }
<<<<<<< HEAD
    static completedItems() {
      return this.findAll({
        where: {
          completed: true,
=======
    static completedItems(userId) {
      return this.findAll({
        where: {
          completed: true,
          userId,
>>>>>>> 6724317 (third)
        },
        order: [["id", "ASC"]],
      });
    }
<<<<<<< HEAD
    static async remove(id) {
      return this.destroy({
        where: {
          id,
=======
    static async remove(id, userId) {
      return this.destroy({
        where: {
          id,
          userId,
>>>>>>> 6724317 (third)
        },
      });
    }
    setCompletionStatus(bool) {
      return this.update({ completed: bool });
    }
  }

  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
<<<<<<< HEAD
};
=======
};
>>>>>>> 6724317 (third)
