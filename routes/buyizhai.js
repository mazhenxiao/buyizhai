const express = require('express');
const router = express.Router();
const index = require("../controller/index")
const util = require("util");
/* GET users listing. */
router.get('/', function (req, res, next) {

  index.getIndex()
    .then(list => {
      res.render('buyizhai', { title: '布衣斋',list});
    })
})


/**
 * @name ()
 * @param {}
 * @constant {}
 */
router.post('/GetList', (req, res, next) => {
  console.log(req);
  res.json({ "errorcode": 0, data: [{ a: 1 }] });
})

module.exports = router;