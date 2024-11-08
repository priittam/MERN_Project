const express=require("express");
const bcrypt=require("bcrypt");
const router=express.Router();
const jwt=require("jsonwebtoken");
const Authenticate= require("../middleware/Authenticate");
const cookie =require("cookie-parser") 
require("../db/conn");
const User= require("../model/userSchema");

// const middleware=((req,res,next)=>{
//     console.log(`Hello from Mddleware`);
//     next();
//     })
router.use(cookie);
router.get('/',(req,res)=>{
    res.send("Hello from pritam");
})

router.get('/about',Authenticate,(req,res)=>{
    res.send(req.rootUser);
})

router.get('/contact',(req,res)=>{
    res.send("Hello from contact");
})

router.get('/login',(req,res)=>{
    res.send("Hello from login");
})

router.get('/register',(req,res)=>{
    res.send("Hello from register");
})


//SAVING OF DATA USING PROMISES


// router.post('/register',(req,res)=>{
//     const {name, email, phone, work, password, cpassword}=req.body;
//     console.log(req.body);
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         res.json({error: "Plaese fill the field properly"});
//     }

//     User.findOne({email: email}).then((userExist)=>{
//         if(userExist){
//          return  res.json({message: "The entered email is already existed "});
//         }
//         const user= new User({name, email, phone, work, password, cpassword});
//         user.save().then(()=>{
//             res.status(200).json({message: "successfully saved"})
//         })
//         .catch((err)=>{
//             res.status(401).json({message: "Error data does not saved"})

//         })
//     }).catch(err=>{console.log(err);})

// })


//SAVING OF DATA USING ASYNC AWAIT ----But this has an error


// router.post('/register',async (req,res)=>{
//     const {name, email, phone, work, password, cpassword}=req.body;
//     console.log(req.body);

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         res.json({error: "Plaese fill the field properly"});
//     }

//     try{
//        const userExist= User.findOne({email: email});
      
//             if(userExist){
//              return  res.json({message: "The entered email is already existed "});
//             }
//             const user= new User({name, email, phone, work, password, cpassword});
//             await user.save();

            
//                 res.status(200).json({message: "successfully saved"})

            
           
           
       
//     }catch(err){
//         console.log(err);
//     }
    

// })


//SAVING OF DATA USING ASYNC AWAIT


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    console.log(req.body);

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(404).json({ error: "Please fill in all fields properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            console.log("User Exist");
            return res.status(404).json({ message: "The entered email is already in use" });
        }

        const user = new User({ name, email, phone, work, password, cpassword });
//Middleware for hashing user's password

      try{
        await user.save();
        console.log("User is successfully saved")
      }
      catch(e){
        console.log(`Error while saving is ${e}`);

      }

        return res.status(200).json({ message: "Successfully saved" });
    } catch (err) {
        console.error(err);
        return res.status(404).json({ error: "An error occurred while registering" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(404).json({ error: "Please fill in all fields properly" });
        }

        const findUser = await User.findOne({ email: email });

        if (findUser) {
            const isBcryptMatch = await bcrypt.compare(password, findUser.password);


            const token =await findUser.generateAuthToken();
            console.log(token);

           new Date(Date.now() + expirationTime);
            res.cookie("jwtoken",token,{
                httpOnly: true
            });


            if (isBcryptMatch) {
                return res.status(200).json({ message: "Login Successful" });
            } else if (password === findUser.password) {
                return res.status(200).json({ message: "Login Successful" });
            } else {
                return res.status(404).json({ error: "Invalid Login Credentials" });
            }
        }
        else{
            return res.status(404).json({ error: "Sorry You are not registered !! " });

        }
       
       

        
    } catch (err) {
        console.log(err);
        return res.status(404).json({ error: "Internal Server Error" });
    }
});


module.exports = router;