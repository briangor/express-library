const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users list');
});

router.get('/profile', function (req, res) {
  res.send('users profile')
})

module.exports = router;
