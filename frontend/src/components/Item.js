import React from 'react'
import Button from './Button'

export default ({ data: { loading, task }}) => !loading ? (
  <div>
    <div>

      <h1>{ task.name }</h1>
      <p>{ task.description }</p>

      <h2>Hey, I know someone for this...</h2>
      <p></p>

      <div>
        <Button primary huge>Share it</Button>
      </div>

    </div>

  </div>
) : null
