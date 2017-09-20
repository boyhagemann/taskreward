import React, { Component } from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import MaxBox from './MaxBox'
import Link from './Link'
import Box from './Box'
import Badge from './Badge'
import Button from './Button'
import DropdownMenu from './DropdownMenu'

const Bar = Box.extend`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  z-index: 10;
`


const Account = Box.extend`
  text-align: right;
  position: relative;
`

const Name = styled.span`
  font-weight: bold;
`

const renderItem = ({ to, label, badge }) => <Tab key={to} to={to} color={`pencil++++`} activeColor={`night`}>
  {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
</Tab>

export default class extends Component {

  constructor() {
    super()

    this.state = {
      showAccountMenu: false
    }

    this.toggleAccountMenu = this.toggleAccountMenu.bind(this)
    this.hideAccountMenu = this.hideAccountMenu.bind(this)
  }

  hideAccountMenu() {
    this.setState({
      showAccountMenu: false
    })
  }

  toggleAccountMenu() {
    this.setState({
      showAccountMenu: !this.state.showAccountMenu
    })
  }

  render() {

    const { items = [], accountItems = [], name } = this.props

    return (
      <Bar bg={`bleech`} py={2}>
        <MaxBox>
          <Box width={[1, 10/12]} color={`night+++`}>
            { name
              ? items.map(renderItem)
              : <Tab exact to={`/`}>Home</Tab>
            }
          </Box>
          <Account width={[1, 2/12]}>
            { name
              ? (
                <div>
                  <div>
                    Logged in as <Button onClick={this.toggleAccountMenu}>
                      <Name>{name}</Name>
                    </Button>
                  { this.state.showAccountMenu && (
                    <DropdownMenu
                      items={accountItems}
                      onClickOutside={this.hideAccountMenu}
                      handleClick={this.hideAccountMenu}
                    />
                  ) }
                </div>

                </div>
              )
              : (
                <Button component={Link} to={`/login`}>Login</Button>
              )
            }
          </Account>
        </MaxBox>
      </Bar>
    )
  }
}
