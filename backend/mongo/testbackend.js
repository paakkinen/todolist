const mongoose = require("mongoose");

const { Kitten } = require("./schema");

async function getAllKitties(params) {

const allKitties = await Kitten.find();

return allKitties.map((k) => {

return {

id: k._id.toHexString(),

name: k.name,

time: k.time,

};

});

}

async function saveKitty(kitten) {

console.log("daadaa1 :D", JSON.stringify(kitten));

const birthday = new Date().getTime();

const saveKitty = await Kitten.create({

name: kitten.name,

time: birthday,

});

console.log(saveKitty);

const kittenId = saveKitty._id.toHexString();

return {

id: kittenId,

name: kitten.name,

time: birthday,

};

console.log("daadaa3 :D");

}

async function deleteKitty(id) {

try {

const x = await Kitten.remove({ _id: mongoose.Types.ObjectId(id) });

if (x && !x.deletedCount) {

throw new Error("yhtää kissaa ei poistettu");

}

console.log("poistettiin: ", x);

} catch (error) {

console.error("Objektin poistaminen epäonnistui!: ", error);

throw error;