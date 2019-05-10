const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  const data = {
    text: "hello world"
  };
  res.renderVue('./../../views/Welcome.vue', {data}, req.vueOptions)
})

module.exports = router