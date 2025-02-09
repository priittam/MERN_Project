const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
})

// bcrypting the password

userSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
    })

    // WE ARE GENERATING AUTH TOKEN

    userSchema.methods.generateAuthToken = async function(){
        try{
            let tokenpritam = jwt.sign({_id: this._id}, process.env.SECRET_KEY);//generated token
            this.tokens=this.tokens.concat({ token : tokenpritam });//stored 
            await this.save();
            return tokenpritam;
        }
        catch(err){
            console.log(err);
        }
    }

const User=  mongoose.model("USER", userSchema);

module.exports=User;

