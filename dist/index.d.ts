import { $ as $Fetch } from './error-d5becc6e.js';
export { C as CreateFetchOptions, b as FetchContext, e as FetchError, c as FetchOptions, F as FetchRequest, a as FetchResponse, S as SearchParameters, d as createFetch, f as createFetchError } from './error-d5becc6e.js';

declare const fetch: typeof globalThis.fetch;
declare const Headers: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
};
declare const ofetch: $Fetch;
declare const $fetch: $Fetch;

export { $Fetch, $fetch, Headers, fetch, ofetch };
