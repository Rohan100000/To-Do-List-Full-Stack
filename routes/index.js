const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router Home loaded");

router.get('/',homeController.home);
router.use('/todos',require('./todos'));

module.exports = router;