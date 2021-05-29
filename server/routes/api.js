const express = require("express");
const createTank = require("../../controller/createTank");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("users");
});

router.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

// router.post('/', async (req, res) => {
//     const { name, size} = req.body;
//     try{
//         const { tankId } = await createTank(name, size);
//         res.json({
//             tankId
//         });
//     } catch (err) {
//         res.status(400).json({
//             message: err.message
//         })
//     }
// })

module.exports = router;
