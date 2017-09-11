import React from 'react'
import Navbar from './UI/Navbar'

export default ({ data: { loading, viewer = {} }, items, accountItems }) => loading ? null : (
  <Navbar name={viewer.name} items={items} accountItems={accountItems} />
)
