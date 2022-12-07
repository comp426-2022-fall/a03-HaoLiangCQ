#!/usr/bin/env node

import minimist from "minimist";

import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

if (args.sides == undefined) {
    var sides = 6;
}
else {
    var sides = args.sides;
}

if (args.dice == undefined) {
    var dice = 2;
}
else {
    var dice = args.dice;
}

if (args.rolls == undefined) {
    var rolls = 1;
}
else {
    var rolls = args.rolls;
}

console.log(JSON.stringify(roll(sides,dice,rolls)));