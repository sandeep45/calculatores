import K from '../constants/'

export const updateRentalCalculatorItem = (itemName, itemValue) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      [itemName]: itemValue
    },
  }
}