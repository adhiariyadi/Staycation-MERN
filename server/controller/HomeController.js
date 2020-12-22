const Item = require("../models/Item");
const Booking = require("../models/Booking");
const Member = require("../models/Member");
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  signin: async (req, res) => {
    try {
      if (req.session.user == null || req.session.user == undefined) {
        const alertMessage = req.flash("alertMessage");
        const alertStatus = req.flash("alertStatus");
        const alert = { message: alertMessage, status: alertStatus };
        res.render("index", {
          alert,
          title: "Staycation | Login",
          user: req.session.user,
        });
      } else {
        res.redirect("/admin/dashboard");
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/signin");
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findOne({ username: username });
      if (!user) {
        req.flash("alertMessage", "User yang anda masukan tidak ada!");
        req.flash("alertStatus", "danger");
        res.redirect("/admin/signin");
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        req.flash("alertMessage", "Password yang anda masukan tidak cocok!");
        req.flash("alertStatus", "danger");
        res.redirect("/admin/signin");
      }
      req.session.user = {
        id: user.id,
        username: user.username,
      };
      res.redirect("/admin/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/signin");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/admin/signin");
  },
  dashboard: async (req, res) => {
    try {
      const member = await Member.find();
      const booking = await Booking.find();
      const item = await Item.find();
      res.render("admin/dashboard/index", {
        member,
        booking,
        item,
        title: "Staycation | Dashboard",
        user: req.session.user,
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/signin");
    }
  },
};
