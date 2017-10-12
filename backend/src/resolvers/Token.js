import { sign } from 'jsonwebtoken'
import { encrypt } from './helpers'
import { findUserByEmail, isValidPassword } from './User'
import { SECRET } from '../constants'

export const requestToken = async (_, { email, password }) => {

  try {

    const user = await findUserByEmail(email)

    if(!user) {
      throw new Error('User not found')
    }

    if(!isValidPassword(password, user.salt, user.password)) {
      throw new Error('Invalid password')
    }

    const token = sign({ id: user.id }, SECRET)

    return { ok: true, token }

  }
  catch(error) {

    return { ok: false, message: error }
  }

}
