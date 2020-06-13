const Item = require("../models/Item");
const Treasure = require("../models/Activity");
const Treveler = require("../models/Booking");
const Category = require("../models/Category");
const Bank = require("../models/Bank");
const Member = require("../models/Member");
const Booking = require("../models/Booking");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const treasure = await Treasure.find();
      const treveler = await Treveler.find();
      const city = await Item.find();
      const mostPicked = await Item.find()
        .select("_id title country city price unit imageId")
        .limit(5)
        .populate({ path: "imageId", select: "_id imageUrl" });
      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title country city isPopular imageId",
          perDocumentLimit: 4,
          options: { sort: { sumBooking: -1 } },
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      for (let i = 0; i < category.length; i++) {
        for (let x = 0; x < category[i].itemId.length; x++) {
          const item = await Item.findOne({ _id: category[i].itemId[x]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[x]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial-landing-page.jpg",
        name: "Happy Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Angga",
        familyOccupation: "Product Designer",
      };

      res.status(200).json({
        hero: {
          treasures: treasure.length,
          trevelers: treveler.length,
          cities: city.length,
        },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({
          path: "categoryId",
          select: "_id name",
        })
        .populate({
          path: "imageId",
          select: "_id imageUrl",
        })
        .populate({
          path: "featureId",
          select: "_id name qty imageUrl",
        })
        .populate({
          path: "activityId",
          select: "_id name type isPopular imageUrl",
        });
      const bank = await Bank.find();

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial-detail-page.jpg",
        name: "Happy Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Rizky",
        familyOccupation: "Product Designer",
      };

      res.status(200).json({ ...item._doc, bank, testimonial });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  bookingPage: async (req, res) => {
    try {
      const {
        itemId,
        duration,
        bookingStartDate,
        bookingEndDate,
        firstName,
        lastName,
        email,
        phoneNumber,
        accountHolder,
        bankFrom,
      } = req.body;

      if (!req.file) {
        return res.status(404).json({ message: "Image not found!" });
      }

      if (
        itemId == undefined ||
        duration == undefined ||
        bookingStartDate == undefined ||
        bookingEndDate == undefined ||
        firstName == undefined ||
        lastName == undefined ||
        email == undefined ||
        phoneNumber == undefined ||
        accountHolder == undefined ||
        bankFrom == undefined
      ) {
        return res.status(404).json({ message: "Lengkapi semua field!" });
      }

      const item = await Item.findOne({ _id: itemId });
      if (!item) {
        return res.status(404).json({ message: "Item not found!" });
      }

      item.sumBooking += 1;
      await item.save();

      let total = item.price * duration;
      let tax = total * 0.1;
      const invoice = Math.floor(1000000 + Math.random() * 9000000);

      const member = await Member.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      });

      const booking = await Booking.create({
        invoice,
        bookingStartDate,
        bookingEndDate,
        total: (total += tax),
        itemId: {
          _id: item.id,
          title: item.title,
          price: item.price,
          duration,
        },
        memberId: member.id,
        payments: {
          proofPayment: `images/${req.file.filename}`,
          bankFrom,
          accountHolder,
        },
      });

      res.status(201).json({ message: "Success Booking", booking });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
