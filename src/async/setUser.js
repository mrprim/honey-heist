import { database } from '../firebase'
import cleanObject from '../utils/cleanObject'

export default async user => {
  const epoch = Date.now()
  const u = {
    uid: user.uid,
    displayName: user.displayName,
    created: new Date(epoch)
  }

  return database.ref('users/' + user.uid).set(cleanObject(u))
}
