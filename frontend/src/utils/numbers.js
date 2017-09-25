import moment from 'moment'

export const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals)

export const valuta = value => round(value / 100, 2)

export const range = (start, end) => [ ...Array(1 + end - start).keys() ].map( v => start + v )

export const months = () => range(1, 12).map( month => ({
  value: month,
  label: moment().month(month - 1).format("MMMM")
}) )
