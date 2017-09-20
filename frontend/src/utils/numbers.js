

export const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals)

export const valuta = value => round(value / 100, 2)
