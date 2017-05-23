import K from '../constants/'
import * as reducers from '../reducers'

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
      "sellingPrice": amt
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
      "annualPropertyTaxes": amt
    },
  }
};

export const updateMonthlyHOA = (amt = 200) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "monthlyHOA": amt
    },
  }
};

export const updateAnnualInsurance = (amt = 100) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "annualInsurance": amt
    },
  }
};

export const updateMonthlyRent = (amt = 1600) => {
  return {
    type: K.UPDATE_RENTAL_CALCULATOR_ITEM,
    payload: {
      "monthlyRent": amt
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
  const state = getState();
  const monthlyRent = reducers.getMonthlyRent(state);
  const monthlyOnGoinRepairPercentage = amount/monthlyRent;
  dispatch(updateMonthlyOnGoingRepairPercentage(monthlyOnGoinRepairPercentage));
};

export const updateUpfrontRepairAmount = (upfrontRepairAmount=0) => (dispatch, getState) => {
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const upfrontRepairPercentage = upfrontRepairAmount/sellingPrice;
  dispatch(updateUpfrontRepairPercentage(upfrontRepairPercentage));
};

export const updateDownPaymentAmount = (downPaymentAmount=0) => (dispatch, getState) => {
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const downPaymentPercentage = downPaymentAmount/sellingPrice;
  dispatch(updateDownPaymentPercentage(downPaymentPercentage));
};

export const updateClosingCostAmount = (closingCostAmount=0) => (dispatch, getState) => {
  const state = getState();
  const sellingPrice = reducers.getSellingPrice(state);
  const closingCostPercentage = closingCostAmount/sellingPrice;
  dispatch(updateClosingCostPercentage(closingCostPercentage));
};