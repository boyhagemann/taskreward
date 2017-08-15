import Task from './Task'
import User from './User'
import TaskInput from './TaskInput'
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
    task: ID
    parent: ID
    session: String!
  ): Lead

  createUser(
    input: CreateUserInput
  ): User

  createTask(
    input: TaskInput
  ): Task

  createLead(
    input: LeadInput
  ): Lead
}
`

export default [
  Mutation,
  ...User, CreateUserInput,
  ...Task, TaskInput,
  ...Lead, LeadInput,
  Token,
]
