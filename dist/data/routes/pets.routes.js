"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRouter = void 0;
const express_1 = __importDefault(require("express"));
const pets_1 = require("../pets");
exports.petRouter = express_1.default.Router();
exports.petRouter.get("/", (req, res) => {
    const { species, adopted, minAge, maxAge } = req.query;
    let filteredPets = pets_1.pets;
    if (species) {
        filteredPets = filteredPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());
    }
    if (adopted) {
        filteredPets = filteredPets.filter((pet) => pet.adopted === JSON.parse(adopted));
    }
    if (minAge) {
        filteredPets = filteredPets.filter((pet) => pet.age >= JSON.parse(minAge));
    }
    if (maxAge) {
        filteredPets = filteredPets.filter((pet) => pet.age <= JSON.parse(maxAge));
    }
    res.json(filteredPets);
});
exports.petRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const pet = pets_1.pets.find((pet) => pet.id.toString() === id);
    if (pet) {
        res.json(pet);
    }
    else {
        res.status(404).json({ message: "No pet with that ID" });
    }
});
