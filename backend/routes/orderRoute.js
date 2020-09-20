import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.post("/", isAuth, async(req, res) => {
      const newOrder = await Order({
            orderItems: req.body.orderItems,
            user: req.user._id,
            shipping: req.body.shipping,
            payment: req.body.payment,
            itemsPrice: req.body.itemsPrice,
            taxPrice: req.body.taxPrice,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice,
      })
      const newOrderCreated = await newOrder.save();
      res.status(201).send({message: "New Order Created", data: newOrderCreated});

})

//mine route needs to be in front of :id since it will try to get/mine
router.get("/mine", isAuth, async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
});

router.get("/:id", async(req, res) => {
      const order = await Order.findOne({_id: req.params.id});
      if(order){
            res.send(order);
      }else{
            res.send(404).send({message: "Order not found"});
      }
})





export default router;