const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:Number,
        require:true
    },
    category:{
        type:Number,
        require:true
    },
    image:{
        type:Number,
        require:true
    },
    rating:{
        rate:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            require:true
        }
    }  

})


const products = mongoose.model('products',productShema)

module.exports = products