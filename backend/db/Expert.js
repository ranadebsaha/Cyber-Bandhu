const mongoose = require('mongoose');

const expertSchema=new mongoose.Schema({
    name:String,
    govt_id:String,
    dept:String,
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
    verified:String,
    certified:String,
    doc: [
        {
          name: String,
          type: String,
          url: String,
        },
      ],
    history: [{
      service_id: String,
      user_id:String,
          date: String,
          service_name: String,
          status:String
    }]
});

module.exports=mongoose.model("experts",expertSchema);