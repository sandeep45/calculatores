import rentalCalculator, * as fromRentalCalculator from './rental_calculator'

import { combineReducers } from 'redux'

const rootReducer = (state, action) => {
  if (action.type === 'DO_LOGOUT') {
    state = undefined
  }
  return myReducer(state, action)
};

const myReducer = combineReducers({
  rentalCalculator: rentalCalculator
});

export default rootReducer;

export const getRentalCalculatorItem = (state, itemName) => fromRentalCalculator.
  getRentalCalculatorItem(state.rentalCalculator, itemName);
export const getEntireRentalCalculatorHash = (state) => state.rentalCalculator;

export const getSellingPrice = (state) => fromRentalCalculator.getSellingPrice(state.rentalCalculator);
export const getUpfrontRepairPercentage = (state) => fromRentalCalculator.getUpfrontRepairPercentage(state.rentalCalculator);
export const getClosingCostPercentage = (state) => fromRentalCalculator.getClosingCostPercentage(state.rentalCalculator);
export const getDownPaymentPercentage = (state) => fromRentalCalculator.getDownPaymentPercentage(state.rentalCalculator);
export const getUpfrontRepairAmount = (state) => fromRentalCalculator.getUpfrontRepairAmount(state.rentalCalculator);
export const getClosingCostAmount = (state) => fromRentalCalculator.getClosingCostAmount(state.rentalCalculator);
export const getDownPaymentAmount = (state) => fromRentalCalculator.getDownPaymentAmount(state.rentalCalculator);
export const getCostOfPropertyAmount = (state) => fromRentalCalculator.getCostOfPropertyAmount(state.rentalCalculator);
export const getTotalOutOfPocketAmount = (state) => fromRentalCalculator.getTotalOutOfPocketAmount(state.rentalCalculator);
export const getFinancedAmount = (state) => fromRentalCalculator.getFinancedAmount(state.rentalCalculator);
export const getFinancedPercentage = (state) => fromRentalCalculator.getFinancedPercentage(state.rentalCalculator);
export const getFinanceTerm = (state) => fromRentalCalculator.getFinanceTerm(state.rentalCalculator);
export const getMortageAmount = (state) => fromRentalCalculator.getMortageAmount(state.rentalCalculator);
export const getFinanceRate = (state) => fromRentalCalculator.getFinanceRate(state.rentalCalculator);
export const getAnnualPropertyTaxes = (state) => fromRentalCalculator.getAnnualPropertyTaxes(state.rentalCalculator);
export const getAnnualInsurance = (state) => fromRentalCalculator.getAnnualInsurance(state.rentalCalculator);
export const getMonthlyHOA = (state) => fromRentalCalculator.getMonthlyHOA(state.rentalCalculator);
export const getMonthlyRent = (state) => fromRentalCalculator.getMonthlyRent(state.rentalCalculator);
export const getMonthlyOnGoingRepairPercentage = (state) => fromRentalCalculator.getMonthlyOnGoingRepairPercentage(state.rentalCalculator);
export const getMonthlyOnGoingRepairAmount = (state) => fromRentalCalculator.getMonthlyOnGoingRepairAmount(state.rentalCalculator);
export const getVacancyMonths = (state) => fromRentalCalculator.getVacancyMonths(state.rentalCalculator);
export const getMonthlyIncome = (state) => fromRentalCalculator.getMonthlyIncome(state.rentalCalculator);
export const getAnnualIncome = (state) => fromRentalCalculator.getAnnualIncome(state.rentalCalculator);
export const getCashOnCashReturn = (state) => fromRentalCalculator.getCashOnCashReturn(state.rentalCalculator);
export const getCapRate = (state) => fromRentalCalculator.getCapRate(state.rentalCalculator);
export const getFinancingType = (state) => fromRentalCalculator.getFinancingType(state.rentalCalculator);