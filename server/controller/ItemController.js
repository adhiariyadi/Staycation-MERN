const Category = require("../models/Category");
const Item = require("../models/Item");
const Image = require("../models/Image");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  index: async (req, res) => {
    try {
      const category = await Category.find();
      const item = await Item.find().populate({
        path: "categoryId",
        select: "id name",
      });
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/item/index", {
        category,
        item,
        alert,
        title: "Staycation | Item",
        user: req.session.user,
        action: "view",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  create: async (req, res) => {
    try {
      const { title, price, city, categoryId, description } = req.body;
      if (req.files.length > 0) {
        const category = await Category.findOne({ _id: categoryId });
        const item = await Item.create({
          title,
          price,
          city,
          description,
          categoryId: category._id,
        });
        category.itemId.push({ _id: item._id });
        await category.save();
        for (let i = 0; i < req.files.length; i++) {
          const imageSave = await Image.create({
            imageUrl: `images/${req.files[i].filename}`,
          });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
        req.flash("alertMessage", "Success Add Item!");
        req.flash("alertStatus", "success");
        res.redirect("/admin/item");
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  showImage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate({
        path: "imageId",
        select: "id imageUrl",
      });
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/item/index", {
        item,
        alert,
        title: "Staycation | Show Image Item",
        user: req.session.user,
        action: "show image",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.find();
      const item = await Item.findOne({ _id: id }).populate({
        path: "categoryId",
        select: "id name",
      });
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/item/index", {
        category,
        item,
        alert,
        title: "Staycation | Edit Item",
        user: req.session.user,
        action: "edit",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "imageId",
          select: "id imageUrl",
        })
        .populate({
          path: "categoryId",
          select: "id name",
        });
      const { title, price, city, categoryId, description } = req.body;
      const category = await Category.findOne({ _id: categoryId });
      if (req.files.length > 0) {
        for (let i = 0; i < item.imageId.length; i++) {
          const imageUpdate = await Image.findOne({ _id: item.imageId[i]._id });
          await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`));
          imageUpdate.imageUrl = `images/${req.files[i].filename}`;
          await imageUpdate.save();
        }
      }
      item.title = title;
      item.price = price;
      item.city = city;
      item.description = description;
      item.categoryId = category._id;
      await item.save();
      req.flash("alertMessage", "Success Update Item!");
      req.flash("alertStatus", "success");
      res.redirect("/admin/item");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate("imageId");
      const category = await Category.findOne({
        _id: item.categoryId,
      }).populate("itemId");
      for (let i = 0; i < category.itemId.length; i++) {
        if (category.itemId[i]._id.toString() === item._id.toString()) {
          category.itemId.pull({ _id: item._id });
          await category.save();
        }
      }
      for (let i = 0; i < item.imageId.length; i++) {
        Image.findOne({ _id: item.imageId[i]._id })
          .then((image) => {
            fs.unlink(path.join(`public/${image.imageUrl}`));
            image.remove();
          })
          .catch((error) => {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/admin/item");
          });
      }
      await item.remove();
      req.flash("alertMessage", "Success Delete Item!");
      req.flash("alertStatus", "success");
      res.redirect("/admin/item");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/item");
    }
  },

  showDetail: async (req, res) => {
    const { itemId } = req.params;
    try {
      const item = await Item.findOne({ _id: itemId })
        .populate({
          path: "featureId",
          select: "id name qty imageUrl",
        })
        .populate({
          path: "activityId",
          select: "id name type imageUrl",
        });
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/item/detail/index", {
        item,
        itemId,
        alert,
        title: "Staycation | Detail Item",
        user: req.session.user,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },
};
