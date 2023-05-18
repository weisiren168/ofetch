import http from "node:http";
import https, { AgentOptions } from "node:https";
import nodeFetch, { Headers as _Headers } from "node-fetch-native";

import { createFetch } from "./base";

export * from "./base";

const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");

export function createNodeFetch() {
  if (!useKeepAlive) {
    return nodeFetch;
  }

  // https://github.com/node-fetch/node-fetch#custom-agent
  const agentOptions: AgentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL: any) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    },
  };

  return function nodeFetchWithKeepAlive(
    input: RequestInfo | URL,
    init?: RequestInit
  ) {
    return (nodeFetch as any)(input, { ...nodeFetchOptions, ...init });
  };
}

export const fetch = (!useKeepAlive && globalThis.fetch) || createNodeFetch();

export const Headers = (!useKeepAlive && globalThis.Headers) || _Headers;

export const ofetch = createFetch({ fetch, Headers });
export const $fetch = ofetch;
