import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import MaxBox from './MaxBox'
import Link from './Link'
import Box from './Box'
import Badge from './Badge'
import Button from './Button'

const Bar = Box.extend`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  z-index: 10;
`


const Account = Box.extend`
  text-align: right;
`

const Name = styled.span`
  font-weight: bold;
`

const renderItem = ({ to, label, badge }) => <Tab key={to} to={to} color={`pencil++++`} activeColor={`night`}>
  {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
</Tab>

const renderAccountItem = ({ to, label, badge }) => <Link key={to} to={to}>
  {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
</Link>

export default ({ items = [], accountItems = [], name  }) => (
  <Bar bg={`bleech`} py={2}>
    <MaxBox>
      <Box width={9/12} color={`night+++`}>
        { name
          ? items.map(renderItem)
          : <Tab exact to={`/`}>Home</Tab>
        }
      </Box>
      <Account width={3/12}>
        { name
          ? (
            <div>
              <div>
                Logged in as <Button>
                  <Name>{name}</Name>
                </Button>
            </div>
              { accountItems.map(renderAccountItem)}
            </div>
          )
          : (
            <Button primary component={Link} to={`/login`}>Login</Button>
          )
        }
      </Account>
    </MaxBox>
  </Bar>
)
