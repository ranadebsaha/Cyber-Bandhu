const mongoose = require('mongoose');

const expertSchema=new mongoose.Schema({
    name:String,
    govt_id:{
      type:String,
      // required:true,
      unique:true
    },
    dept:String,
    dob:String,
    gender:String,
    mobile_no:{
      type:String,
      // required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    landmark:String,
    address:String,
    city:String,
    district:String,
    state:String,
    password:{
      type:String,
      required:true,
    },
    verified:{
      type: Boolean,
      default:false
    },
    certified:{
      type: Boolean,
      default:false
    },
    date:{
      type:Date,
      default:Date.now
    },
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