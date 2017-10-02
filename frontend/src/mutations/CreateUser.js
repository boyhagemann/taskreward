import { gql, graphql } from 'react-apollo'

const createUserMutation = gql(`
  mutation createUser($input: CreateUserInput) {
    createUser(input: $input) {
      id
    }
  }
`)

export default graphql(createUserMutation, {
  props: ({ mutate, ownProps }) => ({
    createUser: (values) => {

      const { firstName, middleName, lastName, email, telephone, parent } = values

      console.log('Values', values)

      return mutate({ variables: {
        input: { firstName, middleName, lastName, email, telephone },
      } })
        .catch( error => console.log('errorrrrrr', error))
    }
  })
})
