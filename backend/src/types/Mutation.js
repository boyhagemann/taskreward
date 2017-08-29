import Reward from './Reward'
import User from './User'
import RewardInput from './RewardInput'
import Lead from './Lead'
import LeadInput from './LeadInput'
import CreateUserInput from './CreateUserInput'
import UpdateProfileInput from './UpdateProfileInput'
import UpdateRewardInput from './UpdateRewardInput'
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

  updateProfile(
    input: UpdateProfileInput
  ): Profile

  updateReward(
    input: UpdateRewardInput
  ): Reward
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Reward, RewardInput, UpdateRewardInput,
  ...Lead, LeadInput,
  UpdateProfileInput,
  Token,
]
