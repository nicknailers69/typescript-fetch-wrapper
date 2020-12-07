# Typescript wrapper for Node-Fetch

## Installation
npm i -S typescript-fetch-wrapper

## Usage


import {Fetcher} from "typescript-fetch-wrapper";

const fetch = new Fetcher();

// Simple Get Query without headers

fetch.Query("http://edns.ip-api.com/json", "GET").then((results:any) => {
    console.log(results);
}).catch(err => console.log(err));

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
