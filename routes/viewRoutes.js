const express = require('express');
const viewsController = require('../controller/viewsController');
const authcontroller = require('../controller/authController');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).render('base', {
//         tour: 'Sharan Forest',
//         user: 'Namrah Saeed'
//     })
// })

router.get('/', authcontroller.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authcontroller.isLoggedIn, viewsController.getTour);
router.get('/login', authcontroller.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authcontroller.protect, viewsController.getAccount);

router.post('/submit-user-data', viewsController.updateUserData);

module.exports = router;
