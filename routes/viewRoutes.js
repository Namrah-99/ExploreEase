const express = require('express');
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');
const bookingController = require('../controller/bookingController');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).render('base', {
//         tour: 'Sharan Forest',
//         user: 'Namrah Saeed'
//     })
// })

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get(
  '/my-tours',
  bookingController.createBookingCheckout,
  authController.protect,
  viewsController.getMyTours,
);

router.post('/submit-user-data', viewsController.updateUserData);

module.exports = router;
