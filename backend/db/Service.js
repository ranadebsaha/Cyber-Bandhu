const mongoose = require('mongoose');

const serviceSchema=new mongoose.Schema({
    user_id:String,
    expert_id:String,
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
    status:String
});

module.exports=mongoose.model("services",serviceSchema);