const router = require("express").Router();
const ApiController = require("../controller/ApiController");
const { uploadsingle } = require("../middlewares/Multer");

router.get("/landing-page", ApiController.landingPage);
router.get("/detail-page/:id", ApiController.detailPage);
router.post("/booking-page", uploadsingle, ApiController.bookingPage);

module.exports = router;
