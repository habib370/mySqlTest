import Student from '../models/student.js'

export const getUserData = async (req, res) => {
  try {
     const{name}=req.body;
     if(!name){
      return res.json({ok:true,message:"entites required"});
     }
    const user=await Student.findOne({where:{name}});
    if(!user){
      res.json({ok:false,message:"user not found"});
    }
    return res.json({user});
  } catch (error) {
    res.json({ok:false,error:error.message})
  }
};
export const insertStudent=async(req,res)=>{
   try {
    const{name,dept,cgpa,gender}=req.body;

    const newStudent=await Student.create({
      name:name,
      dept:dept,
      cgpa:cgpa,
      gender:gender
    })
    return res.json({ok:true,student:newStudent});
   } catch (error) {
    res.json({ok:false,error:error.message})
   }
}
export const getAllStudents=async(req,res)=>{
 try {
   const users=await Student.findAll();
   return res.json({users});
 } catch (error) {
  return res.json({ok:false,error:error.message});
 }
}

export const deleteData=async(req,res)=>{
  try {
      const{name}=req.body;
      if(!name){
        return res.json({ok:false,message:"give the persons name"});
      }
      const user=await Student.findOne({where:{name}})
      if(!user){
        return res.json({ok:false,message:"user not found"});
      }
      await user.destroy();
      const users=await Student.findAll();
      return res.json({ok:true,message:"user deleted!",users})
  } catch (error) {
    return res.json({ok:false,error:error.message});
  }
}
