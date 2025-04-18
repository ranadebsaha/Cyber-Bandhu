const mongoose = require('mongoose');

const querySchema=new mongoose.Schema({
    expert_id:String,
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
    status:String
});

module.exports=mongoose.model("queries",querySchema);