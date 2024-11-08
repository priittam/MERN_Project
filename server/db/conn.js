
const mongoose= require('mongoose');
const DB=process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log(`Connection Successfull to mongo db server`);
}).catch((err)=>{
    console.log(`The error during connection is ${err}`);
})