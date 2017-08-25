import color from 'color'

const colors = {
  night: '#234',
  canvas: '#f3f1eb',
  pencil: '#456',
  ocean: '#39f',
  heart: '#d85b5b',
  love: '#d36eb6',
  bleech: '#fff',
  dirt: '#bdb289',
  grass: '#89c552',
}

const offsets = [
  { alias: '----', offset: -1 },
  { alias: '---', offset: -0.5 },
  { alias: '--', offset: -0.1 },
  { alias: '-', offset: -0.05 },
  { alias: '', offset: 0 },
  { alias: '+', offset: 0.05 },
  { alias: '++', offset: 0.1 },
  { alias: '+++', offset: 0.5 },
  { alias: '++++', offset: 1 },
]

const generateColors = (name, value) => offsets
  .map( ({ alias, offset}) => ({
    name: `${name}${alias}`,
    color: color(value).lighten(offset).string()
  }))

const colorsWithOffset = Object.keys(colors)
  .map( name => ({ name, color: colors[name] }))
  .reduce( (current, next ) => {
    return [ ...current, ...generateColors(next.name, next.color) ]
  }, [])
  .reduce( (current, next) => {
    return { ...current, [next.name]: next.color}
  }, {})

export default {
  colors: colorsWithOffset
}
