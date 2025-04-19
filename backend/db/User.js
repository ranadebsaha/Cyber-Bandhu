const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    dob:String,
    gender:String,
    mobile_no:String,
    email:String,
    landmark:String,
    address:String,
    city:String,
    district:String,
    state:String,
    password:String,
    doc: [
        {
          name: String,
          type: String,
          url: String,
        },
      ],
    history: [{
      service_id: String,
      expert_id:String,
          date: String,
          service_name: String,
          status:String
    }],
    date:{
      type:Date,
      default:Date.now
    },
});

module.exports=mongoose.model("users",userSchema);