import { database } from '../firebase'

export default async () => {
  return database.ref('messages').remove()
}
