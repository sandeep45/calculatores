import K from 'js/constants/'

const initialSate = {
  sellingPrice: 500000,
  upfrontRepairPercentage: .03
}

const rentalCalculator = (state=initialSate, action) => {
  switch (action.type){
    case K.UPDATE_RENTAL_CALCULATOR_ITEM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default rentalCalculator;

export const getRentalCalculatorItem = (state, itemName) => state[itemName];
