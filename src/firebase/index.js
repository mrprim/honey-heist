import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../.firebase.config.js'

firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export const database = firebase.database()

export const auth = firebase.auth()

export default firebase
