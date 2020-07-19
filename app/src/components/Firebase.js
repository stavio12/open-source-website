import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "Your apiKey",
  authDomain: "authDomain",
  databaseURL: "DbURL",
  projectId: "ProjectID",
  storageBucket: "StorageBucket",
  messagingSenderId: "MsgID",
  appId: "AppID",

};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig;
