import Ninja from "./Components/Ninja.js";
import NinjaModel from "./Models/Ninja.js";
import Status from "./Components/Status.js";

const ninjasAcademy = [
    new NinjaModel("Flower", "Song", 100, 3, 3),
    new NinjaModel("Fire", "Tree", 100, 3, 3),
    new NinjaModel("Trouser", "Monkey", 100, 3, 3),
];

Status ({
    headingText: "Ninja Acedmy",
    ninjas: ninjasAcademy,

}, document.getElementById("main"));

