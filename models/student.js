import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Student = sequelize.define("Student", {
  name: { type: DataTypes.STRING, allowNull: false },
  dept: { type: DataTypes.STRING, allowNull: false },
  cgpa: { type: DataTypes.FLOAT, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: true },
});

export default Student;
