

const users = [
  { id: "1", email: 'test@test.nl' },
  { id: "2", email: 'test2@test.nl' },
]

export const getUsers = () => users
export const findUser = id => users.find(user => user.id === id)

export default {
  tasks: (user) => tasks.filter(task => task.owner === user.id)
}
