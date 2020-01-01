const express = require('express');
const router = express.Router();

const { getStore, addStore } = require('../controller/storesHandler');

// @desc get stores from database
// @auth PUBLIC
// @type get
router.get('/stores', getStore);

// @desc add a store
// @auth Public
// @type post
router.post('/stores', addStore);

module.exports = router;
