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

// export const GALLERYAPI2 = 'https://developers.gettyimages.com';

export const WEATHERAPI = 'https://api.openweathermap.org/data/2.5/';
export const WAKEY = '5f5131de6ea80b96d26d5ab1a7754dee';

export const NEWSAPI = 'https://newsapi.org/v2/';
export const APIKEY = 'apiKey=1895d4f9542643c2a46cd78e536c2b12';

export const BOOKAPI = 'https://developers.google.com/books';

export const JOKEAPI = 'https://dadjokes.io';
export const JOKETYPES = 'https://dadjokes.io/joke/types';

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