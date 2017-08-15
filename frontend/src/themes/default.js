import color from 'color'

const colors = {
  night: '#234',
  canvas: '#f4f6f8',
  pencil: '#456',
  ocean: '#39f',
  bleech: '#fff',
}

export default {
  navbar: {
    background: colors.night,
    color: colors.bleechs,
    tab: {
      default: {
        background: color(colors.night).lighten(0.1).string(),
        color: color(colors.night).lighten(0.6).string(),
      },
      active: {
        background: color(colors.night).lighten(0.3).string(),
        color: colors.bleech,
      },
    }
  },
  header: {
    background: colors.ocean,
    color: colors.bleech,
    tab: {
      default: {
        background: color(colors.ocean).lighten(0.1).string(),
        color: color(colors.ocean).lighten(0.5).string(),
      },
      active: {
        background: colors.canvas,
        color: colors.pencil,
      },
    }
  },
  task: {
    list: {
      item: {
        heading: {
          color: colors.pencil,
        }
      }
    }
  }
}
