const express= require('express')
const router= express.Router()

router.get("/", (req, res) => {
  res.send(`GET for root`);
});

router.get("/:id", (req, res) => {
  res.send(`GET for user id`);
});

module.exports = router;


