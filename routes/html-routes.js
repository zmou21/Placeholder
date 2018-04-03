  const axios = require("axios");
  const router = require("express").Router();

  router.get("/stock", (req, res) => {
    console.log("this is being hit");
    axios
      .get("https://api.iextrading.com/1.0" + req.params + "batch?types=quote,news,chart&range=1m&last=10")
      .then(console.log(req))
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  module.exports = router;
