import color from 'color'

const colors = {
  night: '#234',
  canvas: '#f3f1eb',
  pencil: '#456',
  ocean: '#39f',
  heart: '#d85b5b',
  bleech: '#fff',
  dirt: '#bdb289',
  grass: '#89c552',
  test: '#425a50',
}

export default {
  page: {
    visual: {
      background: colors.night,
      color: colors.bleech,
    },
    rewards: {
      background: colors.canvas,
    },
    actions: {
      background: color(colors.canvas).darken(0.05).string()
    }
  },
  visual: {
    container: {
      background: colors.night,
      color: colors.bleech,
    }
  },
  navbar: {
    bar: {
      background: colors.bleech,
      color: colors.pencil,
    },
    tab: {
      default: {
        background: null,
        color: colors.pencil,
      },
      active: {
        background: color(colors.ocean).string(),
        color: colors.bleech,
      },
    }
  },
  header: {
    background: color(colors.canvas).string(),
    color: colors.pencil,
    tab: {
      default: {
        background: color(colors.dirt).lighten(0.35).string(),
        color: color(colors.pencil).string(),
      },
      active: {
        background: colors.ocean,
        color: colors.bleech,
      },
    }
  },
  profile: {
    reward: {
      background: color(colors.canvas).darken(0.05).string(),
    }
  },
  button: {
    default: {
      background: color(colors.dirt).lighten(0.35).string(),
      color: colors.pencil,
    },
    primary: {
      background: color(colors.ocean).string(),
      color: colors.bleech,
    },
    positive: {
      background: color(colors.grass).string(),
      color: colors.bleech,
    },
    negative: {
      background: color(colors.heart).string(),
      color: colors.bleech,
    },
  },
  input: {
    description: {
      color: color(colors.pencil).fade(0.5).string(),
    }
  },
}
