import express from 'express';
import Product from '../models/productModel';
import {getToken, isAuth, isAdmin} from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
      const productCategory = req.query.category ? {category: req.query.category} : {};
      const products = await Product.find({ ...productCategory});
      res.send(products);
});

router.get("/:id", async (req, res) => {
      const product = await Product.findOne({_id: req.params.id});
      if(product){
            res.send(product);
      }else{
            res.send(404).send({message: "Product not found"});
      }
      
});

router.post("/", isAuth, isAdmin, async (req, res) => {
      const product = new Product({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            description: req.body.description,
            rating: req.body.rating,
            numReviews: req.body.numReviews,           
      });
      const newProduct = await product.save();
      if(newProduct) {
            return res.status(201).send({msg: 'New Product Created', data: newProduct});
      }
      return res.status(500).send({msg: 'Error in Creating product'});
});
router.put("/:id", isAuth, isAdmin, async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById({_id: productId});
      if(product) {
            product.name= req.body.name;
            product.image= req.body.image;
            product.price= req.body.price;
            product.category= req.body.category;
            product.countInStock= req.body.countInStock;
            product.description=req.body.description;
            const updatedProduct = await product.save();
            if(updatedProduct) {
                  return res.status(200).send({message: 'Product Updated', data: updatedProduct})
            }
      }
      return res.status(500).send({msg: 'Error in Updating product'});
});

router.delete("/:id", isAuth, isAdmin, async(req, res) =>{
      //console.log(req);
      const deletedProduct = await Product.findById(req.params.id);
      if(deletedProduct){
            await deletedProduct.remove();
            res.send({message: "Product Deleted"});
      } else {
            res.send("Error in deleting");
      }
})

export default router;