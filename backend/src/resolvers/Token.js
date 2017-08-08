import { sign } from 'jsonwebtoken'
import { encrypt } from './helpers'
import { findUserByEmail, isValidPassword } from './User'
const secret = 'fdst3401$sxk&d&^@@WWQR%%wefq43o54@#F*&$%GGq23s'

export const requestToken = async (_, { email, password }) => {

  try {

    const user = await findUserByEmail(email)

    if(!user) {
      throw new Error('User not found')
    }

    if(!isValidPassword(password, user.salt, user.password)) {
      throw new Error('Invalid password')
    }

    const token = sign({ id: user.id }, secret)

    return { ok: true, token }

  }
  catch(error) {

    return { ok: false, message: error }
  }

}
