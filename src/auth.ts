//const fetch = require 
import fetch from 'node-fetch';
import loginError from './scripts/loginError'
// on fait un module ??

export default class Auth {
  id: Number[];
  token: String;

  constructor(id: Number[] = []) {
    this.id =  id;
    this.token = null
  }

  login(token: String = null){
    // token: pseudoAmadev.idAmadev.:+args
    // ou: idAmadev.timestampCreation.hash pour les comptes complets
    // et: idAmadev.randomCodeString pour les Bearer
    this.token = token
    if(token === null) {
      return new loginError(400, "No token was given.")
    }
  }
  // TODO: dev la structure de la classe auth et creer une fonction de login et de register.
  /// Pas de register, le register se fera via le site // nan // pq non ?
  /// Il faut pouvoir get un BEARER depuis amadev // je yr laisse voir
}