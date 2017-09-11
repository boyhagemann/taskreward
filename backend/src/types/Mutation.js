import Incentive from './Incentive'
import Milestone from './Milestone'
import User from './User'
import Lead from './Lead'
import CreateLeadInput from './CreateLeadInput'
import CreateUserInput from './CreateUserInput'
import CreateIncentiveInput from './CreateIncentiveInput'
import CreateMilestoneInput from './CreateMilestoneInput'
import UpdateProfileInput from './UpdateProfileInput'
import UpdateIncentiveInput from './UpdateIncentiveInput'
import UpdateMilestoneInput from './UpdateMilestoneInput'
import AssignIncentiveInput from './AssignIncentiveInput'
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

  createIncentive(
    input: CreateIncentiveInput
  ): Incentive

  createMilestone(
    input: CreateMilestoneInput
  ): Milestone

  createLead(
    input: CreateLeadInput
  ): Lead

  updateProfile(
    input: UpdateProfileInput
  ): Profile

  updateIncentive(
    input: UpdateIncentiveInput
  ): Incentive

  updateMilestone(
    input: UpdateMilestoneInput
  ): Milestone

  assignIncentive(
    input: AssignIncentiveInput
  ): Incentive
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Incentive, CreateIncentiveInput, UpdateIncentiveInput,
  ...Milestone, CreateMilestoneInput, UpdateMilestoneInput,
  ...Lead, CreateLeadInput,
  UpdateProfileInput,
  AssignIncentiveInput,
  Token,
]
