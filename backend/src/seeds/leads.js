
export default [
  {
    id: 'lead.1',
    user: 'user.1',
    task: 'task.1',
    description: "Check this out no child leads",
    status: 'some-status'
  },
  {
    id: 'lead.2',
    user: 'user.2',
    task: 'task.2',
    description: "Check this out level 1",
    status: 'some-status'
  },
  {
    id: 'lead.3',
    user: 'user.3',
    parent: 'lead.1',
    description: "Check this out level 2",
    status: 'some-status'
  },
  {
    id: 'lead.4',
    user: 'user.4',
    parent: 'lead.3',
    description: "Check this out level 3",
    status: 'some-status'
  },
]
