import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { open } from '../redux/modal'
import Page from './Page'
import WithWindowSize from './WithWindowSize'

const profileQuery = gql`
query Profile($hash: String!) {
  lead(hash: $hash) {
    profile {
      name
      description
      rewards {
        id
        name
        description
        value
      }
    }
  }
}
`

const WithProfile = graphql(profileQuery, {
  props: ({ data: { loading, lead } }) => ({
    loading,
    profile: lead && lead.profile
  })
})


const mapStateToProps = (state, props) => ({
  size: state.size,
  hash: props.match.params.hash,
})

const mapDispatchToProps = (dispatch, props) => ({
  openReferModal: () => {
    const hash = props.match.params.hash
    console.log('hash', hash)
    dispatch(open('refer', { hash }))
  }
})

const WithRedux = connect(mapStateToProps, mapDispatchToProps)


export default compose(
  WithRedux,
  WithProfile,
  WithWindowSize
)(Page)
