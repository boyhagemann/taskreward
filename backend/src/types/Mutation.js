import Task from './Task'
import TaskInput from './TaskInput'
import Lead from './Lead'
import LeadInput from './LeadInput'

const Mutation = `
type Mutation {

  createTask(
    input: TaskInput
  ): Task

  createLead(
    input: LeadInput
  ): Lead
}
`

export default [Mutation, ...Task, TaskInput, ...Lead, LeadInput]
