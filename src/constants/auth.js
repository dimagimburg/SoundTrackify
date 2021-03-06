// spotify api
export const CLIENT_ID = 'c37e2d134880414a82a3f78bcb0e11ce'; // Use your client ID
export const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/callback`;
export const RESPONSE_TYPE = 'token';
export const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
export const LOCAL_STORAGE_TOKEN_KEY = 'sp_token';
export const CALLBACK_ORIGIN = 'http://localhost:8080';
export const API_USER_DETAILS = 'https://api.spotify.com/v1/me';

// movies api
export const TMDB_API_KEY = 'aeed2058ab94efa70b4e39a5e5f79098';
export const TMDB_API_URL = 'https://api.themoviedb.org/3';