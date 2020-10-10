import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCubp7pTRp6CvK_YRMW7MYIHcLw_rWbL5U",
    authDomain: "crime-record-app.firebaseapp.com",
    databaseURL: "https://crime-record-app.firebaseio.com",
    projectId: "crime-record-app",
    storageBucket: "crime-record-app.appspot.com",
    messagingSenderId: "767263158306",
    appId: "1:767263158306:web:97c2126b5934e254da1a7b",
    measurementId: "G-G9H2DV8NYH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

