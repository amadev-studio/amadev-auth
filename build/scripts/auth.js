"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginError_1 = require("./loginError");
// on fait un module ??
class Auth {
    constructor(id = []) {
        this.id = id;
        this.token = null;
    }
    login(token = null) {
        // token: pseudoAmadev.idAmadev.:+args
        // ou: idAmadev.timestampCreation.hash pour les comptes complets
        // et: idAmadev.randomCodeString pour les Bearer
        this.token = token;
        if (token === null) {
            return new loginError_1.default(400, "No token was given.");
        }
    }
}
exports.default = Auth;
