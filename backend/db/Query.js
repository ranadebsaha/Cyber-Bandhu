const mongoose = require('mongoose');

const querySchema=new mongoose.Schema({
    expert_id:String,
    f_name:String,
    l_name:String,
    query_name:String,
    query_des:String,
    mobile_no:String,
    email:String,
    remarks:String,
    landmark:String,
    address:String,
    city:String,
    district:String,
    state:String,
    feedback:String,
    status: {
        type: String,
        enum: ["pending", "rejected", "done"],
        default: "pending"
    },
    date:{
        type:Date,
        default:Date.now
      },
});

module.exports=mongoose.model("queries",querySchema);