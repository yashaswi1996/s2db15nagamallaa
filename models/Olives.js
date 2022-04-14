const mongoose = require("mongoose") 
const oliveSchema = mongoose.Schema({ 
    Olives_color: String, 
    Olives_quantity: String, 
    Olives_cost: Number 
}) 
 
module.exports = mongoose.model("olive",oliveSchema) 