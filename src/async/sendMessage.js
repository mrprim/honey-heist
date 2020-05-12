import { database } from '../firebase'
import cleanObject from '../utils/cleanObject'

export default async (type, data) => {
  const epoch = Date.now()
  const message = {
    type,
    ...data,
    created: new Date(epoch)
  }

  await database.ref('messages/' + epoch).set(cleanObject(message))
}
