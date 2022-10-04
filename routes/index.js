const express = require('express');
const router = express.Router();

const { getWidgets, chartData, tableData } = require('../controller')

router.get('/get-widgets/role/:role', getWidgets);
router.get('/tableData', tableData);
router.get('/chartData', chartData);


module.exports = router