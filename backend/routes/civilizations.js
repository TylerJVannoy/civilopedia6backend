const router = require("express").Router();
let Civilization = require("../models/civilization.model");

router.route("/").get((req, res) => {
  Civilization.find()
    .then(civilizations => res.json(civilizations))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const image = req.body.image;
  const civilization = req.body.civilization;
  const civdescription = req.body.civdescription;
  const leader = req.body.leader;
  const leaderdescription = req.body.leaderdescription;
  const unit = req.body.unit;
  const unitdescription = req.body.unitdescription;
  const infrastructure = req.body.infrastructure;
  const infrastructuredescription = req.body.infrastructuredescription;
  const rating = Number(req.body.rating);

  const newCivilization = new Civilization({
    image,
    civilization,
    civdescription,
    leader,
    leaderdescription,
    unit,
    unitdescription,
    infrastructure,
    infrastructuredescription,
    rating,
  });

  newCivilization
    .save()
    .then(() => res.json("Civilization Added"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Civilization.findById(req.params.id)
    .then(civilizations => res.json(civilizations))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Civilization.findByIdAndDelete(req.params.id)
    .then(() => res.json("Civ Deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Civilization.findById(req.params.id).then(civ => {
    civ.image = req.body.image;
    civ.civilization = req.body.civilization;
    civ.civdescription = req.body.civdescription;
    civ.leader = req.body.leader;
    civ.leaderdescription = req.body.leaderdescription;
    civ.unit = req.body.unit;
    civ.unitdescription = req.body.unitdescription;
    civ.infrastructure = req.body.infrastructure;
    civ.infrastructuredescription = req.body.infrastructuredescription;
    civ.rating = Number(req.body.rating);

    civ
      .save()
      .then(() => res.json("Civilization Updated"))
      .catch(err => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
