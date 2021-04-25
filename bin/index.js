#!/usr/bin/env node
const lib = require("lilon-lib");

const argv = require("process").argv;
const command = argv[2]

lib[command] ? lib[command]() : console.log("请输入命令")
// console.log(lib.sum(1,2))
// console.log("Lilon cli test!!!")