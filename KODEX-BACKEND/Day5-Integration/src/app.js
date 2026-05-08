let express = require('express')
const ProductModel = require('./model/product.model')
let app = express()
app.use(express.json())
app.post('/create-product',async(req,res)=>{
try {
    let {name,description,category,stock,amount,currency} = req.body
        if (!name || !amount || !stock) {
            return res.status(400).json({
                massage:'all Fields are required'
        })
    }

    let newProduct = await ProductModel.create({
        productName:name,
        description,
        price:{
            amount,
            currency,
        },
        category,
        stock,
    })
    return res.status(201).json({
        massage:"Product created successfully",
        product: newProduct
    })
} 
catch (error) {
    console.log(error);
    res.status(500).json({
        massage:"Internal server error"
    }) 
    
}
})
        module.exports = app
