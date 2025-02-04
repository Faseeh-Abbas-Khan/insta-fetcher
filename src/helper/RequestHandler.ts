import axios from 'axios';
import { config } from '../config';
import { CookieHandler } from './CookieHandler';
let session_id = new CookieHandler().get();

const buildHeaders = (agent: string = config.android) => {
	return {
		'cache-control': 'no-cache',
		'user-agent': agent,
		cookie: `sessionid=${session_id};`,
		'Accept-Encoding': 'gzip, deflate, br',
		pragma: 'no-cache',
		'sec-fetch-mode': 'navigate',
		'sec-fetch-site': 'none',
		'sec-fetch-user': '?1',
		'upgrade-insecure-requests': '1',
	};
}

/** Fetches Using Instagram Base Url */
export const IGFetch = axios.create({
	baseURL: config.instagram_base_url,
	headers: buildHeaders(config.desktop)
});

/** Fetches Instagram User */
export const IGUser = axios.create({
	baseURL: config.instagram_user_url,
	headers: buildHeaders(),
});

/** Fetches Instagram Stories */
export const IGStories = axios.create({
	baseURL: config.instagram_stories_url,
	headers: buildHeaders(),
});

export const IGHighlight = axios.create({
	baseURL: config.instagram_graphql,
	headers: buildHeaders()
})

/** Fetches Instagram Search Users | Places | Hashtags*/
export const IGSearch = axios.create({
	baseURL: config.instagram_search_url,
	headers: buildHeaders()
});
