export const LOGIN_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};


export const POSTER_URL = "https://image.tmdb.org/t/p/w500"

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY
