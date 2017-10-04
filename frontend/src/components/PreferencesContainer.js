import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import Preferences from './Preferences'

const WithQuery = graphql(gql`
  query Preferences {
    viewer {
      id
    }
  }
`, {
  props: ({ data: { loading, viewer = {} } }) => ({
    loading,
    viewer,
  })
})

const ReduxForm = reduxForm({
  form: 'preferences',
  onSubmit: values => {
    console.log(values)
  }
})

export default compose(
  WithQuery,
  ReduxForm,
)(Preferences)
