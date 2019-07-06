import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "",
  authDomain: "careworksfoundations.firebaseapp.com",
  databaseURL: "https://careworksfoundations.firebaseio.com",
  projectId: "careworksfoundations",
  storageBucket: "",
  messagingSenderId: "759168342872"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;