import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST"],
    credentials:true,

}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// router.get("/",(req,res,next) =>{
//    res.json({success:true,message:"hi there!"})
   
// })

router.post("/send/mail",async(req,res,next) =>{
    const {name,email,message} = req.body;
    if(!name || !email || !message){
      return next (
        res.status(400).json({
            success:false,
            message:"please provide all details.",
        })
      ) 
    }
    try {
        await sendEmail({
            email:"shivi29personal@gmail.com",
            subject:"GYM WEBSITE CONTACT",
            message,
            userEmail:email,
        })
        res.status(200).json({
            success:true,
            message:"Message send successfully."
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
})

app.use(router)



// app.listen(process.env.PORT, () => {
//     console.log(`Server listening at port ${process.env.PORT}`);
app.listen(4001, () => {
    console.log('Server started on port 4001');
  });
