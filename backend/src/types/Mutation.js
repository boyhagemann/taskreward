import Reward from './Reward'
import Milestone from './Milestone'
import User from './User'
import Lead from './Lead'
import CreateLeadInput from './CreateLeadInput'
import CreateUserInput from './CreateUserInput'
import RewardInput from './RewardInput'
import CreateMilestoneInput from './CreateMilestoneInput'
import UpdateProfileInput from './UpdateProfileInput'
import UpdateRewardInput from './UpdateRewardInput'
import UpdateMilestoneInput from './UpdateMilestoneInput'
import AssignRewardInput from './AssignRewardInput'
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

  createMilestone(
    input: CreateMilestoneInput
  ): Milestone

  createLead(
    input: CreateLeadInput
  ): Lead

  updateProfile(
    input: UpdateProfileInput
  ): Profile

  updateReward(
    input: UpdateRewardInput
  ): Reward

  updateMilestone(
    input: UpdateMilestoneInput
  ): Milestone

  assignReward(
    input: AssignRewardInput
  ): Reward
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Reward, RewardInput, UpdateRewardInput,
  ...Milestone, CreateMilestoneInput, UpdateMilestoneInput,
  ...Lead, CreateLeadInput,
  UpdateProfileInput,
  AssignRewardInput,
  Token,
]
