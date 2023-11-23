const mongoose = require('mongoose');
require('dotenv').config()



const dbConnect = async()=>{
   await mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log(`db sucess`);
    })
    .catch((err)=>{
        console.log(err);
    })

}





module.exports = dbConnect