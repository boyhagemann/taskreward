import Color from 'color'
import { range } from './numbers'

const pickRandom = items => items[Math.floor(Math.random()*items.length)]

export const randomColor = () => {
  const r = range(70, 180)
  const g = range(70, 180)
  const b = range(70, 180)

  return Color({
    r: pickRandom(r),
    g: pickRandom(g),
    b: pickRandom(b)
  })
}
