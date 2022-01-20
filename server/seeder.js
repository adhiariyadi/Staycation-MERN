var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb://127.0.0.1:27017/staycation",
  {
    useNewUrlParser: false,
    useCreateIndex: false,
    useFindAndModify: false,
    useUnifiedTopology: false,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Houses with beauty backyard",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Hotels with large living room",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
        name: "Apartment with kitchen",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233") },
        ],
      },
    ],
  },
  // end category

  // start item
  {
    model: "Item",
    documents: [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Tabby Town",
        price: 18,
        sumBooking: 2,
        country: "Indonesia",
        city: "Jakarta",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd03") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Anggana",
        price: 20,
        sumBooking: 4,
        country: "Indonesia",
        city: "Bogor",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd04") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd06") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Seattle Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Seattle Rain",
        price: 15,
        sumBooking: 2,
        country: "Indonesia",
        city: "Yogyakarta",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd08") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd09") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa17") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa18") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa19") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa20") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa21") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa22") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa23") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa24") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb09") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb10") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb11") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb12") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Wodden Pit",
        price: 17,
        sumBooking: 2,
        country: "Indonesia",
        city: "Wonosobo",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa25") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa26") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa27") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa28") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa29") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa30") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa31") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa32") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb13") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb14") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb15") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb16") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Green Park",
        price: 16,
        sumBooking: 2,
        country: "Indonesia",
        city: "Tanggerang",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa33") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa34") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa35") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa36") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa37") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa38") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa39") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa40") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb17") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb18") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb19") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb20") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Podo Wae
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
        title: "Podo Wae",
        price: 21,
        sumBooking: 2,
        country: "Indonesia",
        city: "Madiun",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa41") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa42") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa43") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa44") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa45") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa46") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa47") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa48") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb21") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb22") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb23") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb24") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
        title: "Silver Rain",
        price: 23,
        sumBooking: 2,
        country: "Indonesia",
        city: "Bandung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa49") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa50") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa51") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa52") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa53") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa54") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa55") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa56") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb25") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb26") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb27") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb28") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
        title: "Cashville",
        price: 19,
        sumBooking: 4,
        country: "Indonesia",
        city: "Kemang",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa57") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa58") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa59") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa60") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa61") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa62") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa63") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa64") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb29") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb30") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb31") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb32") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // PS Wood
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
        title: "PS Wood",
        price: 22,
        sumBooking: 2,
        country: "Indonesia",
        city: "Depok",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa65") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa66") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa67") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa68") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa69") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa70") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa71") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa72") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb33") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb34") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb35") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb36") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // One Five
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
        title: "One Five",
        price: 18,
        sumBooking: 2,
        country: "Indonesia",
        city: "Palembang",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa73") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa74") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa75") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa76") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa77") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa78") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa79") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa80") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb37") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb38") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb39") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb40") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
        title: "Minimal",
        price: 17,
        sumBooking: 4,
        country: "Indonesia",
        city: "Ponorogo",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa81") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa82") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa83") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa84") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa85") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa86") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa87") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa88") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb41") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb42") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb43") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb44") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
        title: "Stays Home",
        price: 20,
        sumBooking: 2,
        country: "Indonesia",
        city: "Lampung",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "night",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36") },
        ],
        featureId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa89") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa90") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa91") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa92") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa93") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa94") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa95") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa96") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb45") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb46") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb47") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb48") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },
    ],
  },
  // end item

  // start image
  {
    model: "Image",
    documents: [
      // image Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd01"),
        imageUrl: "images/image-mostpicked-01-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd02"),
        imageUrl: "images/image-mostpicked-02-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd03"),
        imageUrl: "images/image-mostpicked-03-min.jpg",
      },

      // image Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd04"),
        imageUrl: "images/image-mostpicked-04-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd05"),
        imageUrl: "images/image-mostpicked-05-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd06"),
        imageUrl: "images/image-mostpicked-06-min.jpg",
      },

      // image Seattle Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd07"),
        imageUrl: "images/image-mostpicked-07-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd08"),
        imageUrl: "images/image-mostpicked-08-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd09"),
        imageUrl: "images/image-mostpicked-09-min.jpg",
      },

      // image Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/image-mostpicked-10-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/image-mostpicked-11-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/image-mostpicked-12-min.jpg",
      },

      // image Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/image-mostpicked-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/image-mostpicked-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/image-mostpicked-15-min.jpg",
      },

      // image Podo Wae
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/image-mostpicked-16-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
        imageUrl: "images/image-mostpicked-17-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
        imageUrl: "images/image-mostpicked-18-min.jpg",
      },

      // image Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
        imageUrl: "images/image-mostpicked-19-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
        imageUrl: "images/image-mostpicked-20-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
        imageUrl: "images/image-mostpicked-21-min.jpg",
      },

      // image Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
        imageUrl: "images/image-mostpicked-22-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
        imageUrl: "images/image-mostpicked-23-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
        imageUrl: "images/image-mostpicked-24-min.jpg",
      },

      // image PS Wood
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
        imageUrl: "images/image-mostpicked-25-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
        imageUrl: "images/image-mostpicked-26-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
        imageUrl: "images/image-mostpicked-27-min.jpg",
      },

      // image One Five
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
        imageUrl: "images/image-mostpicked-28-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
        imageUrl: "images/image-mostpicked-29-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
        imageUrl: "images/image-mostpicked-30-min.jpg",
      },

      // image Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
        imageUrl: "images/image-mostpicked-31-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
        imageUrl: "images/image-mostpicked-32-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
        imageUrl: "images/image-mostpicked-33-min.jpg",
      },

      // image Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
        imageUrl: "images/image-mostpicked-34-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
        imageUrl: "images/image-mostpicked-35-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
        imageUrl: "images/image-mostpicked-36-min.jpg",
      },
    ],
  },
  // end image

  // start feature
  {
    model: "Feature",
    documents: [
      // feature Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-01.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-02.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "bathroom",
        qty: 2,
        imageUrl: "images/feature-03.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-04.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05"),
        name: "mbp/s",
        qty: 8,
        imageUrl: "images/feature-05.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06"),
        name: "unit ready",
        qty: 5,
        imageUrl: "images/feature-06.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07"),
        name: "refigrator",
        qty: 2,
        imageUrl: "images/feature-07.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08"),
        name: "televion",
        qty: 4,
        imageUrl: "images/feature-08.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },

      // feature Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "bedroom",
        qty: 4,
        imageUrl: "images/feature-09.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "living room",
        qty: 3,
        imageUrl: "images/feature-10.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "bathroom",
        qty: 5,
        imageUrl: "images/feature-11.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-12.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13"),
        name: "mbp/s",
        qty: 10,
        imageUrl: "images/feature-13.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14"),
        name: "unit ready",
        qty: 7,
        imageUrl: "images/feature-14.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15"),
        name: "refigrator",
        qty: 3,
        imageUrl: "images/feature-15.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16"),
        name: "televion",
        qty: 6,
        imageUrl: "images/feature-16.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },

      // feature Seattle Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa17"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-17.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa18"),
        name: "living room",
        qty: 2,
        imageUrl: "images/feature-18.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa19"),
        name: "bathroom",
        qty: 3,
        imageUrl: "images/feature-19.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa20"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-20.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa21"),
        name: "mbp/s",
        qty: 6,
        imageUrl: "images/feature-21.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa22"),
        name: "unit ready",
        qty: 4,
        imageUrl: "images/feature-22.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa23"),
        name: "refigrator",
        qty: 2,
        imageUrl: "images/feature-23.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa24"),
        name: "televion",
        qty: 3,
        imageUrl: "images/feature-24.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },

      // feature Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa25"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-25.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa26"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-26.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa27"),
        name: "bathroom",
        qty: 2,
        imageUrl: "images/feature-27.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa28"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-28.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa29"),
        name: "mbp/s",
        qty: 4,
        imageUrl: "images/feature-29.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa30"),
        name: "unit ready",
        qty: 2,
        imageUrl: "images/feature-30.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa31"),
        name: "refigrator",
        qty: 1,
        imageUrl: "images/feature-31.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa32"),
        name: "televion",
        qty: 2,
        imageUrl: "images/feature-32.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },

      // feature Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa33"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-33.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa34"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-34.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa35"),
        name: "bathroom",
        qty: 2,
        imageUrl: "images/feature-35.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa36"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-36.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa37"),
        name: "mbp/s",
        qty: 8,
        imageUrl: "images/feature-37.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa38"),
        name: "unit ready",
        qty: 3,
        imageUrl: "images/feature-38.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa39"),
        name: "refigrator",
        qty: 1,
        imageUrl: "images/feature-39.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa40"),
        name: "televion",
        qty: 3,
        imageUrl: "images/feature-40.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },

      // feature Podo Wae
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa41"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-41.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa42"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-42.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa43"),
        name: "bathroom",
        qty: 4,
        imageUrl: "images/feature-43.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa44"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-44.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa45"),
        name: "mbp/s",
        qty: 10,
        imageUrl: "images/feature-45.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa46"),
        name: "unit ready",
        qty: 4,
        imageUrl: "images/feature-46.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa47"),
        name: "refigrator",
        qty: 2,
        imageUrl: "images/feature-47.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa48"),
        name: "televion",
        qty: 4,
        imageUrl: "images/feature-48.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },

      // feature Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa49"),
        name: "bedroom",
        qty: 4,
        imageUrl: "images/feature-49.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa50"),
        name: "living room",
        qty: 2,
        imageUrl: "images/feature-50.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa51"),
        name: "bathroom",
        qty: 5,
        imageUrl: "images/feature-51.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa52"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-52.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa53"),
        name: "mbp/s",
        qty: 12,
        imageUrl: "images/feature-53.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa54"),
        name: "unit ready",
        qty: 6,
        imageUrl: "images/feature-54.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa55"),
        name: "refigrator",
        qty: 3,
        imageUrl: "images/feature-55.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa56"),
        name: "televion",
        qty: 6,
        imageUrl: "images/feature-56.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },

      // feature Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa57"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-57.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa58"),
        name: "living room",
        qty: 2,
        imageUrl: "images/feature-58.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa59"),
        name: "bathroom",
        qty: 4,
        imageUrl: "images/feature-59.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa60"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-60.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa61"),
        name: "mbp/s",
        qty: 10,
        imageUrl: "images/feature-61.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa62"),
        name: "unit ready",
        qty: 4,
        imageUrl: "images/feature-62.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa63"),
        name: "refigrator",
        qty: 2,
        imageUrl: "images/feature-63.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa64"),
        name: "televion",
        qty: 4,
        imageUrl: "images/feature-64.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },

      // feature PS Wood
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa65"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-65.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa66"),
        name: "living room",
        qty: 2,
        imageUrl: "images/feature-66.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa67"),
        name: "bathroom",
        qty: 4,
        imageUrl: "images/feature-67.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa68"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-68.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa69"),
        name: "mbp/s",
        qty: 10,
        imageUrl: "images/feature-69.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa70"),
        name: "unit ready",
        qty: 4,
        imageUrl: "images/feature-70.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa71"),
        name: "refigrator",
        qty: 2,
        imageUrl: "images/feature-71.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa72"),
        name: "televion",
        qty: 4,
        imageUrl: "images/feature-72.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },

      // feature One Five
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa73"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-33.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa74"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-74.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa75"),
        name: "bathroom",
        qty: 2,
        imageUrl: "images/feature-75.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa76"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-76.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa77"),
        name: "mbp/s",
        qty: 6,
        imageUrl: "images/feature-77.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa78"),
        name: "unit ready",
        qty: 3,
        imageUrl: "images/feature-78.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa79"),
        name: "refigrator",
        qty: 1,
        imageUrl: "images/feature-79.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa80"),
        name: "televion",
        qty: 2,
        imageUrl: "images/feature-80.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },

      // feature Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa81"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-81.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa82"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-82.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa83"),
        name: "bathroom",
        qty: 1,
        imageUrl: "images/feature-83.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa84"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-84.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa85"),
        name: "mbp/s",
        qty: 5,
        imageUrl: "images/feature-85.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa86"),
        name: "unit ready",
        qty: 2,
        imageUrl: "images/feature-86.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa87"),
        name: "refigrator",
        qty: 1,
        imageUrl: "images/feature-87.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa88"),
        name: "televion",
        qty: 2,
        imageUrl: "images/feature-88.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },

      // feature Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa89"),
        name: "bedroom",
        qty: 3,
        imageUrl: "images/feature-89.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa90"),
        name: "living room",
        qty: 1,
        imageUrl: "images/feature-90.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa91"),
        name: "bathroom",
        qty: 3,
        imageUrl: "images/feature-91.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa92"),
        name: "dining rooms",
        qty: 1,
        imageUrl: "images/feature-92.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa93"),
        name: "mbp/s",
        qty: 8,
        imageUrl: "images/feature-93.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa94"),
        name: "unit ready",
        qty: 4,
        imageUrl: "images/feature-94.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa95"),
        name: "refigrator",
        qty: 1,
        imageUrl: "images/feature-95.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa96"),
        name: "televion",
        qty: 4,
        imageUrl: "images/feature-96.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
    ],
  },
  // end feature

  // start activity
  {
    model: "Activity",
    documents: [
      // activity Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-01.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-02.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-03.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-04.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },

      // activity Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-05.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-06.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-07.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-08.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },

      // activity Seattle Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb09"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-09.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb10"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-10.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb11"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-11.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb12"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-12.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },

      // activity Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb13"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-13.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb14"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-14.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb15"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-15.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb16"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-16.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },

      // activity Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb17"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-17.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb18"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-18.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb19"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-19.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb20"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-20.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },

      // activity Podo Wae
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb21"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-21.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb22"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-22.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb23"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-23.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb24"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-24.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },

      // activity Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb25"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-25.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb26"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-26.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb27"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-27.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb28"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-28.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },

      // activity Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb29"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-29.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb30"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-30.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb31"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-31.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb32"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-32.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },

      // activity PS Wood
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb33"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-33.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb34"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-34.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb35"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-35.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb36"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-36.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },

      // activity One Five
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb37"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-37.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb38"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-38.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb39"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-39.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb40"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-40.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },

      // activity Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb41"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-41.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb42"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-42.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb43"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-43.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb44"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-44.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },

      // activity Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb45"),
        name: "Snorkeling",
        type: "Beach",
        imageUrl: "images/activity-45.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb46"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-46.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb47"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-47.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb48"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-48.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
    ],
  },
  // end activity

  // start member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903332"),
        firstName: "Adhi",
        lastName: "Ariyadi",
        email: "adhiariyadi40@gmail.com",
        phoneNumber: "081246835129",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Elfin",
        lastName: "Sanjaya",
        email: "elfinsanjaya12@gmail.com",
        phoneNumber: "082377954008",
      },
    ],
  },
  // end member

  // start bank
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Bank Mandiri",
        nomorRekening: "2206 1969",
        name: "Adhi Ariyadi",
        imageUrl: "images/logo mandiri.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "Bank Central Asia",
        nomorRekening: "2208 1996",
        name: "Adhi Ariyadi",
        imageUrl: "images/logo bca.png",
      },
    ],
  },
  // end bank

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingStartDate: "12-12-2020",
        bookingEndDate: "12-12-2020",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Tabby Town",
          price: 18,
          duration: 2,
        },
        total: 36,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903332"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/buktibayar.jpeg",
          bankFrom: "Bank Central Asia",
          status: "Proses",
          accountHolder: "Adhi Ariyadi",
        },
      },
    ],
  },
  // end booking

  // start users
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "admin123",
      },
    ],
  },
  // end users
];
