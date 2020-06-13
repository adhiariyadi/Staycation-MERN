const Item = require("../models/Item");
const Feature = require("../models/Feature");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  create: async (req, res) => {
    const { name, qty, itemId } = req.body;
    try {
      if (!req.file) {
        req.flash("alertMessage", "Image not found!");
        req.flash("alertStatus", "danger");
        res.redirect(`/admin/item/detail/${itemId}`);
      }
      const item = await Item.findOne({ _id: itemId });
      const feature = await Feature.create({
        name,
        qty,
        imageUrl: `images/${req.file.filename}`,
        itemId: item._id,
      });
      item.featureId.push({ _id: feature._id });
      await item.save();
      req.flash("alertMessage", "Success Add Feature!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },

  update: async (req, res) => {
    const { id, name, qty, itemId } = req.body;
    try {
      const feature = await Feature.findOne({ _id: id });
      if (req.file != undefined) {
        await fs.unlink(path.join(`public/${feature.imageUrl}`));
        feature.imageUrl = `images/${req.file.filename}`;
      }
      feature.name = name;
      feature.qty = qty;
      await feature.save();
      req.flash("alertMessage", "Success Update Feature!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${itemId}`);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const feature = await Feature.findOne({ _id: id });
    try {
      const item = await Item.findOne({ _id: feature.itemId }).populate(
        "featureId"
      );
      for (let i = 0; i < item.featureId.length; i++) {
        if (item.featureId[i]._id.toString() === feature._id.toString()) {
          item.featureId.pull({ _id: feature._id });
          await item.save();
        }
      }
      await fs.unlink(path.join(`public/${feature.imageUrl}`));
      await feature.remove();
      req.flash("alertMessage", "Success Delete Feature!");
      req.flash("alertStatus", "success");
      res.redirect(`/admin/item/detail/${feature.itemId}`);
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect(`/admin/item/detail/${feature.itemId}`);
    }
  },
};
