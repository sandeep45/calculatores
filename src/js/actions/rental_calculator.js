import K from '../constants/'
import * as reducers from '../reducers'
import numeral from 'numeral'

export const updateRentalCalculatorItem = (itemName, itemValue) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      [itemName]: itemValue
    },
  }
};

export const updateSellingPrice = (amt = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "sellingPrice": numeral(amt).value()
    },
  }
};

export const updateFinanceTerm = (years = 30) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "financeTerm": years
    },
  }
};

export const updateFinanceRate = (rate = 3.5) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "financeRate": rate
    },
  }
};

export const updateAnnualPropertyTaxes = (amt = 2000) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "annualPropertyTaxes": numeral(amt).value()
    },
  }
};

export const updateMonthlyHOA = (amt = 200) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "monthlyHOA": numeral(amt).value()
    },
  }
};

export const updateAnnualInsurance = (amt = 100) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "annualInsurance": numeral(amt).value()
    },
  }
};

export const updateMonthlyRent = (amt = 1600) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "monthlyRent": numeral(amt).value()
    },
  }
};

export const updateMonthlyOnGoingRepairPercentage = (perc = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "monthlyOnGoingRepairPercentage": perc
    },
  }
};

export const updateUpfrontRepairPercentage = (perc = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "upfrontRepairPercentage": perc
    },
  }
};

export const updateClosingCostPercentage = (perc = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "closingCostPercentage": perc
    },
  }
};

export const updateDownPaymentPercentage = (perc = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "downPaymentPercentage": perc
    },
  }
};

export const updateVacancyMonths = (months = 0) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "vacancyMonths": months
    },
  }
};

export const updateFinancingType = (type = "principleAndInterest") => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "financingType": type
    },
  }
};

export const updateMonthlyOnGoingRepairAmount = (amount = 0)=> (dispatch, getState) => {
  amount = numeral(amount).value();
  const state = getState();
  const monthlyRent = reducers.getMonthlyRent(state);
  const monthlyOnGoinRepairPercentage = amount/monthlyRent * 100;
  dispatch(updateMonthlyOnGoingRepairPercentage(monthlyOnGoinRepairPercentage));
};

export const updateUpfrontRepairAmount = (upfrontRepairAmount=0) => (dispatch, getState) => {
  upfrontRepairAmount = numeral(upfrontRepairAmount).value();
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const upfrontRepairPercentage = upfrontRepairAmount/sellingPrice * 100;
  dispatch(updateUpfrontRepairPercentage(upfrontRepairPercentage));
};

export const updateDownPaymentAmount = (downPaymentAmount=0) => (dispatch, getState) => {
  downPaymentAmount = numeral(downPaymentAmount).value();
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const downPaymentPercentage = downPaymentAmount/sellingPrice * 100;
  dispatch(updateDownPaymentPercentage(downPaymentPercentage));
};

export const updateClosingCostAmount = (closingCostAmount=0) => (dispatch, getState) => {
  closingCostAmount = numeral(closingCostAmount).value();
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const closingCostPercentage = closingCostAmount/sellingPrice * 100;
  dispatch(updateClosingCostPercentage(closingCostPercentage));
};