'use strict';

const http = require('node:http');
const https = require('node:https');
const nodeFetch = require('node-fetch-native');
const fetch$1 = require('./shared/ofetch.0fda5c9e.cjs');
require('destr');
require('ufo');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const http__default = /*#__PURE__*/_interopDefaultCompat(http);
const https__default = /*#__PURE__*/_interopDefaultCompat(https);
const nodeFetch__default = /*#__PURE__*/_interopDefaultCompat(nodeFetch);

const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
function createNodeFetch() {
  if (!useKeepAlive) {
    return nodeFetch__default;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default.Agent(agentOptions);
  const httpsAgent = new https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return nodeFetch__default(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = !useKeepAlive && globalThis.fetch || createNodeFetch();
const Headers = !useKeepAlive && globalThis.Headers || nodeFetch.Headers;
const ofetch = fetch$1.createFetch({ fetch, Headers });
const $fetch = ofetch;

exports.FetchError = fetch$1.FetchError;
exports.createFetch = fetch$1.createFetch;
exports.createFetchError = fetch$1.createFetchError;
exports.$fetch = $fetch;
exports.Headers = Headers;
exports.createNodeFetch = createNodeFetch;
exports.fetch = fetch;
exports.ofetch = ofetch;
