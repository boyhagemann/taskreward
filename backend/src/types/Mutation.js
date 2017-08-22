import Reward from './Reward'
import User from './User'
import RewardInput from './RewardInput'
import Lead from './Lead'
import LeadInput from './LeadInput'
import CreateUserInput from './CreateUserInput'
import Token from './Token'

const Mutation = `
type Mutation {

  requestToken(
    email: String!
    password: String!,
  ): Token

  redirect(
    hash: String!
    session: String!
  ): Lead

  createUser(
    input: CreateUserInput
  ): User

  createReward(
    input: RewardInput
  ): Reward

  createLead(
    input: LeadInput
  ): Lead
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Reward, RewardInput,
  ...Lead, LeadInput,
  Token,
]
