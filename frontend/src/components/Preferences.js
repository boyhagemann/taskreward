import React from 'react'
import { Link } from 'react-router-dom'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Header from './UI/Header'
import Text from './UI/Text'
import Button from './UI/Button'
import Moment from 'react-moment'
import { round } from '../utils/numbers'

const Item = props => <Box width={1} bg={`bleech`} mb={2} p={1} { ...props } />

export default ({ loading, viewer }) => loading ? null : (
  <MaxBox>
    <Header
      title={'Preferences'}
    />
  </MaxBox>
)
