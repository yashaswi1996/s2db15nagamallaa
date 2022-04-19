const mongoose = require("mongoose") 
const oliveSchema = mongoose.Schema({ 
    Olives_color: String, 
    Olives_quantity: { type: String }, 
    Olives_cost: { type: Number } 
}) 
 
module.exports = mongoose.model("Olives", oliveSchema)