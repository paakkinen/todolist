const express = require("express");

const app = require("../app");

const { Kitten } = require("../mongo/schema");

const router = express.Router();

const kitten = require("../mongo/testbackend");

/* GET home page. */

router.get("/", async function (req, res, next) {

const list = await kitten.getAllKitties();

console.log(list);

res.json({ list });

});

/* POST home page || POST index root */

router.post("/", async function (req, res, next) {

/* TASO 0 */

try {

const body = req.body;

console.log("🚀 ~ file: index.js ~ line 13 ~ req.body", req.body);

const jotain = await kitten.saveKitty({

name: body.name,

});

console.log("Await save kitty", jotain);

console.log("tulosti: " + JSON.stringify(body));

res.json({ status: "ok", kitten: jotain });

} catch (error) {

console.error("NOT OK :(", error);

res.status(500).json({ status: "ERROR 500" });

}

});

/* router delete */

router.delete("/:id", async function (req, res, next) {

try {

const kittenId = req.params.id;

console.log("🚀 ~ file: index.js ~ line 35 ~ kittenId", kittenId);

const test = await kitten.deleteKitty(kittenId);

res.json({ status: "ok" });

} catch (error) {

console.error("hyäää D:", error);

res.status(500).json({ status: "ERROR 500" });

}

})
module.exports = router;