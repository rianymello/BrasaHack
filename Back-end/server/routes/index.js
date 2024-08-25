const express = require('express');
const router = express.Router();
const ocrController = require('../controllers/ocr-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/read', ocrController.read)

module.exports = router;
