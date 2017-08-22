import color from 'color'

const colors = {
  night: '#234',
  canvas: '#f3f1eb',
  pencil: '#456',
  ocean: '#39f',
  bleech: '#fff',
  dirt: '#bdb289',
  grass: '#89c552',
}

export default {
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
  reward: {
    list: {
      item: {
        heading: {
          color: colors.pencil,
        }
      }
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
  },
  input: {
    description: {
      color: color(colors.pencil).lighten(0.9).string(),
    }
  },
}
