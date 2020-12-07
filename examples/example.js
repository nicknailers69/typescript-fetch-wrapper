"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var fetch = new index_1.Fetcher();
// Simple Get Query without headers
fetch.Query("http://edns.ip-api.com/json", "GET").then(function (results) {
    console.log(results);
}).catch(function (err) { return console.log(err); });
/**
 * Same concept for other methods with headers and / or body:
 *
 *  POST Request with header:
 *
 *  const headers = [{
 *      name:"xsrf-token",
 *      value:"some token here"
 *  }, {
 *      name:"authorization",
 *      value:"bearer someTokenHere"
 *  }];
 *
 *  async () => await fetch.Query("your url here", "POST", headers); //returns a promise
 *
 *  to add a body you can simply pass the body object as the last parameter:
 *
 *  async () => await fetch.Query("your url here", "POST", headers, {my:"body object"}); //returns a promise
 *
 *
 */ 
//# sourceMappingURL=example.js.map