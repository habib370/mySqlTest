import express from 'express'
import{getUserData,insertStudent,getAllStudents,deleteData} from '../controller/user.js'
const userRouter=express.Router();
userRouter.get('/search',getUserData);
userRouter.post('/insert',insertStudent);
userRouter.get('/all',getAllStudents);
userRouter.delete('/delete',deleteData);
export default userRouter;