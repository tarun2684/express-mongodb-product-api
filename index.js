const express = require('express')
const mongoose = require('mongoose')
const Product= require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://tarune2684:yWFlbVRPkvq2eumi@crud-app-cluster.rbtmynv.mongodb.net/?retryWrites=true&w=majority&appName=Crud-app-cluster"
const PORT = process.env.PORT || 3000
const app = express()

//Middleware
app.use(express.json()) //  for using  the json input
app.use(express.urlencoded({extended:false}))//  for handling the form url inputs 

//routes
app.use('/api/products',productRoute)




app.get('/', (req,res)=>{
    res.send("Hello from nodemon  !");
    //res.send("MongoDB is connected");
});

// app.get('/api/products',async (req,res)=>{
//     try{
//         const products = await product.find({});
//         res.status(200).json(products)
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
    
// });


// app.get('/api/products/:id',async (req,res)=>{
//     try{
//         const {id}= req.params;
//   //      const products = await product.find({});
//         const singleProduct = await product.findById(id) 
//         res.status(200).json(singleProduct)
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
    
// });



// //creating the product
// app.post('/api/products',async (req,res)=>{
//     try{
//         const Product = await product.create(req.body)
//         res.status(200).json(Product)
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
    
// });

// //Updating the product
// app.put('/api/products/:id', async (req,res) => {
//     try {
//         const {id}= req.params;
//         await product.findByIdAndUpdate(id, req.body)

//         if(!product){
//             return res.status(404).json(product)
//         }
//         const updatedProduct = await product.findById(id)
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
    
// })

// //deleting the product 

// app.delete('/api/products/:id', async (req,res)=>{
//     try {
//         const {id} = req.params;
//         const deletedProduct = await product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message :"Product not found"});
//         }
//         res.status(200).json({message:"Product deleted successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })






mongoose.connect(mongoURI)
.then(()=>{
    console.log("The connection is successful");
    app.listen(PORT, ()=>{
        console.log("Server running in port 3000")  
      });
})
.catch(()=>{
    console.log("The connection failed")
})