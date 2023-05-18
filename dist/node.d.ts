import { $ as $Fetch } from './error-04138797.js';
export { C as CreateFetchOptions, b as FetchContext, e as FetchError, c as FetchOptions, F as FetchRequest, a as FetchResponse, S as SearchParameters, d as createFetch, f as createFetchError } from './error-04138797.js';

declare function createNodeFetch(): (input: RequestInfo | URL, init?: RequestInit) => any;
declare const fetch: (input: RequestInfo | URL, init?: RequestInit) => any;
declare const Headers: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
};
declare const ofetch: $Fetch;
declare const $fetch: $Fetch;

export { $Fetch, $fetch, Headers, createNodeFetch, fetch, ofetch };
