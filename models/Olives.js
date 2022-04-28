const mongoose = require("mongoose") 
const oliveSchema = mongoose.Schema({ 
    Olives_color: String, 
    Olives_quantity:{type: String, minLength: 5},
    Olives_cost:{type:Number,min:5,max:100}
    
}) 
 
module.exports = mongoose.model("Olives", oliveSchema)