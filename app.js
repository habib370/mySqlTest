
import express from "express";
import sequelize from "./config/db.js";
import userRouter from './router/userRouter.js'
const app = express();
app.use(express.json());
app.use('/student',userRouter);

sequelize.sync().then(() => {
  console.log("Database connected & table created");
});

app.listen(3000, () => console.log("Server running on 3000"));
