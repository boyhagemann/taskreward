import { gql, graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Task from './Task'

const TaskWithData = graphql(gql`
  query Task($id: ID!) {
    task(id: $id) {
      id
      name
      description
      link
      leads {
        id
        user {
          name
          email
        }
        status
        depth
      }
    }
  }
`, {
  options: props => ({
    variables: props.match.params
  })
})(Task)

export default reduxForm({
  form: "task_properties",
  onSubmit: (values) => {
    console.log(values)
  }
})(TaskWithData)
