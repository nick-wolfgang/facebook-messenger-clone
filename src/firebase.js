import firebase from './firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBFMKiKfLVNEw7LYsAHxjHVzKj24Mt6pfI",
        authDomain: "messenger-clone-89920.firebaseapp.com",
        projectId: "messenger-clone-89920",
        storageBucket: "messenger-clone-89920.appspot.com",
        messagingSenderId: "476287295199",
        appId: "1:476287295199:web:71a6f65d975f07ee69d36a",
        measurementId: "G-GCRGWLNPTQ"
});

const db = firebaseApp.firestore();

export default db ;