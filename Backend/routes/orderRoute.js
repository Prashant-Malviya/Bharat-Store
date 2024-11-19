import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js';
import adminAuth from '../middlewares/adminAuth.js'
import authUser from '../middlewares/auth'

const orderRouter = express.Router();

// Admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// user feature
orderRouter.post('/userorders',authUser,userOrders);

export default orderRouter;