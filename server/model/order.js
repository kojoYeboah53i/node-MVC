const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema ({
    client: {
        type: String,

    },
    menu: {
        type:  mongoose.Schema.Types.ObjectId, ref : 'Menu',
        
    },
    order_date: {
        type: Date,
    },
    amount: {
        type: Number,
        
    },
    paid: {
        type: Boolean,
        
    },
    status: {
        type: Boolean,
        
    }

});

module.exports =  mongoose.model("order", orderSchema)

