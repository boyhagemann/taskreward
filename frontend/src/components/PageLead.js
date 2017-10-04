import React, { Component } from 'react'
import Moment from 'react-moment'
import { Route } from 'react-router-dom'
import Activity from './Lead/Activity'
import Conversation from './Lead/Conversation'
import History from './Lead/History'
import Box from './UI/Box'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Tab from './UI/Tab'
import Heading from './UI/Heading'
import Link from './UI/Link'
import Text from './UI/Text'
import Icon from './UI/Icon'
import Loading from './Loading'
import Avatar from './UI/Avatar'
import Color from 'color'

const Breadcrumb = props => <Box width={1} px={1} py={3} { ...props } />

const Name = props => <Box fontSize={5} { ...props } />
const Email = props => <Box fontSize={1} color={`pencil+++`} { ...props } />


const Tabs = props => <Box width={1} my={2} { ...props } />
const Profile = props => <Box width={1} p={1} mb={1} { ...props } />
const Actions = props => <Box width={1} mb={1} { ...props } />
const StyledTab = props => <Tab p={2} color={`pencil+++`} activeColor={`night`}activeBorder={`ocean`}  { ...props } />

export default class extends Component {

  componentDidMount() {
    this.props.subscribeToEvents()
  }

  render() {

    const { loading, viewer, profile, openAssignActionModal } = this.props

    const color = profile && Color(profile.lead.color)

    return loading ? <Loading /> : (
      <div>

        <Box width={1} bg={color.darken(0.15).hex()}>
          <MaxBox>
            <Breadcrumb>
              <Link to={`/page/leads`} color={`bleech`} opacity={0.3} fontSize={1}>
                Back to leads
              </Link>
            </Breadcrumb>
          </MaxBox>
        </Box>

        <Box width={1} bg={color.hex()}>
          <MaxBox>
            <Box width={[1]} px={1} py={120} textAlign={['center', 'center', 'left']}>

              <Profile width={[1, 1/2]}>
                <Avatar
                  fontSize={5}
                  color={color.lighten(0.1).hex()}
                  mt={1}
                  mr={1}
                  p={3}
                >AT</Avatar>
                <Box mt={3}>
                  <Heading m={0} color={`bleech`}>{ profile.lead.user.name }</Heading>
                  <Email color={`night`} opacity={0.8}>{ profile.lead.user.email }</Email>
                </Box>
              </Profile>

              <Actions mt={2} width={[1, 1/2]}>
                <Text color={`bleech`} opacity={0.5}>Came to the office on <Moment>{profile.lead.createdAt}</Moment></Text>
                <Button large positive mr={[0, 1]} onClick={openAssignActionModal}>
                  <Icon name="success" size={2} color={`bleech`} opacity={0.5} mr={1} />
                  Add activity...
                </Button>
                <Button large negative>
                  <Icon name="cross" size={2} color={`bleech`} opacity={0.5} mr={1} />
                  Reject
                </Button>
              </Actions>

            </Box>
          </MaxBox>
        </Box>
        <MaxBox>
          <Box width={[1]} px={1}>

            <Tabs>
              <StyledTab exact to={`/page/leads/${profile.lead.id}`}>Activity</StyledTab>
              <StyledTab to={`/page/leads/${profile.lead.id}/conversation`}>Conversation</StyledTab>
              <StyledTab to={`/page/leads/${profile.lead.id}/history`}>History</StyledTab>
            </Tabs>

            <Route exact path={`/page/leads/${profile.lead.id}`} render={ () => <Activity {...this.props} /> } />
            <Route path={`/page/leads/${profile.lead.id}/conversation`} render={ () => <Conversation {...this.props } /> } />
            <Route path={`/page/leads/${profile.lead.id}/history`} render={ () => <History viewer={viewer} lead={profile.lead} /> } />

          </Box>
        </MaxBox>
        </div>
    )
  }
}
