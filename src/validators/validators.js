export const required = value => value ? undefined: 'Required'

export const mustBeDividedWithSymb = value => value.split('|||').length === 2 ? undefined: 'Строка должна быть с разделителем |||'

export const isNumber = value => isNaN(value) ? 'Поле должно быть числом': undefined

export const greaterThanZero = value => value > 0 ? undefined: 'Поле должно быть числом больше 0'
