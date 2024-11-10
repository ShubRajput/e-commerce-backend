import express from 'express';
import { 
    signup, 
    login 
} from '../Controller/Authentication Controller/authController.js';
import { 
    getUser, 
    updateUser, 
    deleteUser 
} from '../Controller/User Controller/userController.js';
import { 
    addProduct, 
    getProducts, 
    updateProduct, 
    deleteProduct 
} from '../Controller/Product Controller/products.js';
import { 
    getCart, 
    addToCart, 
    removeFromCart 
} from '../Controller/Cart Controller/cart.js';
import { 
    placeOrder, 
    getOrder, 
    updateOrderStatus 
} from '../Controller/Order Controller/orders.js';
import { 
    getWishlist, 
    addToWishlist, 
    removeFromWishlist 
} from '../Controller/Wishlist Controller/wishList.js';


const router = express.Router();

// Auth Routes
router.post('/signup', signup);
router.post('/login', login);

// User Routes
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Product Routes
router.post('/products', addProduct);        //---> Done
router.get('/products', getProducts);        //---> Done
// router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);   //---> Done
router.delete('/products/:id', deleteProduct);  //---> Done

// Cart Routes
router.get('/cart', getCart);        //---> Done
router.post('/cart', addToCart);    //---> Done
router.delete('/cart/:id', removeFromCart);      //---> Done

// Order Routes
router.post('/orders', placeOrder);      //---> Done
router.get('/orders/:id', getOrder);     
router.put('/orders/:id/status', updateOrderStatus);

// Wishlist Routes
router.get('/wishlist', getWishlist);
router.post('/wishlist', addToWishlist);
router.delete('/wishlist/:id', removeFromWishlist);

// // Payment Routes
// router.post('/payments', processPayment);
// router.get('/payments/:id', getPayment);

export default router;
