


export const name = (user, viewer) => viewer && viewer.id === user.id ? 'You' : user.name
