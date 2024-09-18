import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

export const DBS = '';

export const GALLERYAPI = 'https://api.unsplash.com/photos?page=';
export const SEARCHGALLERYAPI = 'https://api.unsplash.com/search/photos?page=';
export const GA_APP_ID = '638586';
export const GA_AKEY = 'G4ArQlEDeIPLnmXRn8450doj-cd_odzIeO7xDP5h6s8';
export const GA_SKEY = 'FO61lV3M_X0iuWEEgZ3BGGUarDhi9yc6XNqiNACg-50';
export const GA_URI = 'urn:ietf:wg:oauth:2.0:oob';
export const GA_URI_LOCAL = 'urn:ietf:wg:oauth:2.0:oob';

export const WEATHERAPI = 'https://api.openweathermap.org/data/2.5/';
export const WAKEY = '5f5131de6ea80b96d26d5ab1a7754dee';

export const NEWSAPI = 'https://newsapi.org/v2/';
export const APIKEY = 'apiKey=1895d4f9542643c2a46cd78e536c2b12';

export const CRYPTOMRKT = 'https://openapiv1.coinstats.app/';
export const CMKEY = 'FOMVfkjbiiKWsh9v9W2/107c1K6jSi7fHva5KmMAfAQ='

export const JOKEAPI = 'https://dadjokes.io';
export const JOKETYPES = 'https://dadjokes.io/joke/types';

export const MARVELAPI = 'https://gateway.marvel.com/'
export const MPKEY = 'apikey=dd78e0c9e4c56faf2024931685c39d13';
export const MHASH = 'hash=7c87f45c598490473735474776ed152da22f3bcb';

export const COMICAPI = 'https://superheroapi.com/api/'
export const CKEY = '405e32622c3b8a16b1eaf128446b810a';

const firebaseConfig = {
    apiKey: "AIzaSyBQJ3D22gIDyzFHi_xJoGMhLc0ylMCXvp0",
    authDomain: "portfolio-2d2aa.firebaseapp.com",
    databaseURL: "https://portfolio-2d2aa-default-rtdb.firebaseio.com",
    projectId: "portfolio-2d2aa",
    storageBucket: "portfolio-2d2aa.appspot.com",
    messagingSenderId: "605508864160",
    appId: "1:605508864160:web:c71bbda7599bcce190a1c5",
    measurementId: "G-7WMZNR98RS"
};

export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const storeData = getStorage(app);