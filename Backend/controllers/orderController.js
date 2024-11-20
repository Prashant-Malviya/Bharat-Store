import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using cash on delivery(cod) method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);

    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });

  } catch (error) {

    console.log(error);

    res.json({ success: false, message: error.message });

  }
};

// placing orders using stripe delivery method
const placeOrderStripe = async (req, res) => {};

// placing orders using razorpay delivery method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for admin panel
const allOrders = async (req, res) => {};

//User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
    const {userId} = req.body;

    const orders = await orderModel.find({userId});

    res.json({success:true,orders})
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message })
  }
};

// update order status from admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
