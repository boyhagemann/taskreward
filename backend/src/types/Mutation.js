import Incentive from './Incentive'
import Action from './Action'
import User from './User'
import Lead from './Lead'
import CreateLeadInput from './CreateLeadInput'
import CreateUserInput from './CreateUserInput'
import CreateActionInput from './CreateActionInput'
import CreateIncentiveInput from './CreateIncentiveInput'
import UpdateProfileInput from './UpdateProfileInput'
import UpdateActionInput from './UpdateActionInput'
import UpdateIncentiveInput from './UpdateIncentiveInput'
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

  createAction(
    input: CreateActionInput
  ): Action

  createIncentive(
    input: CreateIncentiveInput
  ): Incentive

  createLead(
    input: CreateLeadInput
  ): Lead

  updateProfile(
    input: UpdateProfileInput
  ): Profile

  updateIncentive(
    input: UpdateIncentiveInput
  ): Incentive

  assignIncentive(
    input: AssignIncentiveInput
  ): Incentive
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Action, CreateActionInput, UpdateActionInput,
  ...Incentive, CreateIncentiveInput, UpdateIncentiveInput,
  ...Lead, CreateLeadInput,
  UpdateProfileInput,
  AssignIncentiveInput,
  Token,
]
