import React from 'react'
import Box from '../UI/Box'
import { name } from '../../utils/text'
import Message from '../UI/Message'

const translateLead = (lead, viewer) => {

  switch (lead.source) {

    case 'invite':
      return `${ name(lead.parent.user, viewer) } invited ${ name(lead.user, viewer) }`

    default:
      return `${ name(lead.user, viewer) } viewed the page of ${ name(lead.parent.user, viewer) }`
  }

}

const renderLead = (lead, viewer) => <Message key={lead.id} text={translateLead(lead, viewer)} date={lead.createdAt} />

export default ({ viewer, lead }) => (
  <div>
    { lead.parents.map(parent => renderLead(parent, viewer)) }
    { renderLead(lead, viewer) }
  </div>
)
