import {  getLeadByHash } from './Lead'

export default {
  viewer: (_, {}, { user }) => ({ ...user }),
  lead: (_, { hash }) => getLeadByHash(hash),
}
