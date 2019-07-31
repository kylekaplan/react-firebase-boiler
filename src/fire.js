import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

class Fire {
  constructor() {
    app.initializeApp(firebaseConfig)

    this.auth = app.auth()
    this.db = app.firestore()
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)

  // *** User API ***

  doFirestoreSet = (collection, doc, setObj, callback) => {
    this.db.collection(collection).doc(doc).set(setObj)
    .then(function() {
      console.log("Document successfully written!")
      callback()
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
    })
  }

}

export default Fire
