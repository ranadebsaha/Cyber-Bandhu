const mongoose = require('mongoose');

const serviceSchema=new mongoose.Schema({
    user_id:String,
    user_name:String,
    expert_id:String,
    mobile_no:String,
    email:String,
    service_name:String,
    service_des:String,
    payment_type:String,
    payment_amount:String,
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
    time:{
        type:String,
      },
});

module.exports=mongoose.model("services",serviceSchema);