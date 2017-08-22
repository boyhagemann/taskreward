import { getRewards, getReward } from './Reward'
import { getUsers, getUserByToken } from './User'
import { getLeads, getLead } from './Lead'
import { getProfileByUser } from './Profile'

export default {
  viewer: (_, {}, { user }) => ({ ...user }),
  // rewards: () => getRewards(),
  // reward: (_, { id }) => getReward(id),
  // users: () => getUsers(),
  // leads: () => getLeads(),
  // lead: (_, { id }) => getLead(id),
}
