import { gql, graphql } from 'react-apollo'

const mutation = gql(`
  mutation CreatePayment($input: CreatePaymentInput) {
    createPayment(input: $input) {
      id
      currency
      value
    }
  }
`)

export default graphql(mutation, {
  props: ({ mutate, ownProps }) => ({
    createPayment: user => {
      mutate({
        variables: {
          input: { user },
        }
      })
      .then(response => {
        const payment = response.data.createPayment
        console.log('New payment created', payment)
        ownProps.redirect(payment.id)
      })
    }
  })
})
