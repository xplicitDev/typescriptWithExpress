"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pets_1 = require("./data/pets");
const app = (0, express_1.default)();
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
app.get("/", (req, res) => {
    res.json(pets_1.pets);
});
app.get("/:id", (req, res) => {
    const { id } = req.params;
    const pet = pets_1.pets.find((pet) => pet.id.toString() === id);
    res.json(pet);
});
app.use((req, res) => {
    res.status(404).json({ message: "No Route found" });
});
