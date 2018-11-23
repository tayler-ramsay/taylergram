import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCeTWw8qqTg0gxNhfnfUN9HnIKy7YAVeRA",
  authDomain: "vuegram-f0261.firebaseapp.com",
  databaseURL: "https://vuegram-f0261.firebaseio.com",
  projectId: "vuegram-f0261",
  storageBucket: "vuegram-f0261.appspot.com",
  messagingSenderId: "630329707330"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}