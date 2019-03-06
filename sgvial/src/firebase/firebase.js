import * as firebase from 'firebase';
 
const config = {
    apiKey: "AIzaSyDHx7GJCGbsZpcRPZQSrgatuko9wntF11g",
    authDomain: "sgvial.firebaseapp.com",
    databaseURL: "https://sgvial.firebaseio.com",
    projectId: "sgviale",
    storageBucket: "sgvial.appspot.com",
    messagingSenderId: "138858228705"
};
 
firebase.initializeApp(config);
const database = firebase.database();
 
export { firebase, database as default };
