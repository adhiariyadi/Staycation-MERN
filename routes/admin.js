const router = require("express").Router();
const HomeController = require("../controller/HomeController");
const CategoryController = require("../controller/CategoryController");
const BankController = require("../controller/BankController");
const ItemController = require("../controller/ItemController");
const FeatureController = require("../controller/FeatureController");
const ActivityController = require("../controller/ActivityController");
const BookingController = require("../controller/BookingController");
const { uploadsingle, uploadMultiple } = require("../middlewares/Multer");
const auth = require("../middlewares/Auth");

router.get("/signin", HomeController.signin);
router.post("/login", HomeController.login);
router.use(auth);
router.get("/logout", HomeController.logout);
router.get("/dashboard", HomeController.dashboard);
// endpoint category
router.get("/category", CategoryController.index);
router.post("/category", CategoryController.create);
router.put("/category", CategoryController.update);
router.delete("/category/:id", CategoryController.delete);
// endpoint bank
router.get("/bank", BankController.index);
router.post("/bank", uploadsingle, BankController.create);
router.put("/bank", uploadsingle, BankController.update);
router.delete("/bank/:id", BankController.delete);
// endpoint item
router.get("/item", ItemController.index);
router.post("/item", uploadMultiple, ItemController.create);
router.get("/item/show/:id", ItemController.showImage);
router.get("/item/:id", ItemController.edit);
router.put("/item/:id", uploadMultiple, ItemController.update);
router.delete("/item/:id/delete", ItemController.delete);
router.get("/item/detail/:itemId", ItemController.showDetail);
// endpoint feature
router.post("/item/add/feature", uploadsingle, FeatureController.create);
router.put("/item/update/feature", uploadsingle, FeatureController.update);
router.delete("/item/delete/:id/feature", FeatureController.delete);
// endpoint activity
router.post("/item/add/activity", uploadsingle, ActivityController.create);
router.put("/item/update/activity", uploadsingle, ActivityController.update);
router.delete("/item/delete/:id/activity", ActivityController.delete);
// endpoint booking
router.get("/booking", BookingController.index);
router.get("/booking/:id", BookingController.show);
router.put("/booking/:id/confirmation", BookingController.confirmation);
router.put("/booking/:id/reject", BookingController.reject);

module.exports = router;
