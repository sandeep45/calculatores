import K from 'js/constants/'

const initialSate = {
  sellingPrice: 250000,
  upfrontRepairPercentage: 8.0,
  closingCostPercentage: 3.0,
  downPaymentPercentage: 25.0,
  financeTerm: 30,
  financeRate: 3.0,
  annualPropertyTaxes: 2000,
  monthlyHOA: 200,
  annualInsurance: 100,
  monthlyRent: 1695,
  monthlyOnGoingRepairPercentage: 5.0,
  vacancyMonths: 1,
  financingType: "principleAndInterest"
};

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

export const getSellingPrice = (state) => parseFloat(state.sellingPrice);
export const getUpfrontRepairPercentage = (state) => parseFloat(state.upfrontRepairPercentage);
export const getClosingCostPercentage = (state) => parseFloat(state.closingCostPercentage);
export const getDownPaymentPercentage = (state) => parseFloat(state.downPaymentPercentage);
export const getFinanceTerm = (state) => parseFloat(state.financeTerm);
export const getFinanceRate = (state) => parseFloat(state.financeRate);
export const getAnnualPropertyTaxes = (state) => parseFloat(state.annualPropertyTaxes);
export const getMonthlyHOA = (state) => parseFloat(state.monthlyHOA);
export const getAnnualInsurance = (state) => parseFloat(state.annualInsurance);
export const getMonthlyRent = (state) => parseFloat(state.monthlyRent);
export const getMonthlyOnGoingRepairPercentage = (state) => parseFloat(state.monthlyOnGoingRepairPercentage);
export const getVacancyMonths = (state) => parseFloat(state.vacancyMonths);
export const getFinancingType = (state) => state.financingType;

export const getMonthlyOnGoingRepairAmount = (state) => {
  return getMonthlyRent(state) * (getMonthlyOnGoingRepairPercentage(state)/100)
};

export const getUpfrontRepairAmount = (state) => {
  return getSellingPrice(state) * (getUpfrontRepairPercentage(state)/100)
};

export const getClosingCostAmount = (state) => {
  return getSellingPrice(state) * (getClosingCostPercentage(state)/100)
};

export const getDownPaymentAmount = (state) => {
  return getSellingPrice(state) * (getDownPaymentPercentage(state)/100)
};

export const getTotalOutOfPocketAmount = (state) => {
  return getDownPaymentAmount(state) + getClosingCostAmount(state) +
    getUpfrontRepairAmount(state);
};

export const getCostOfPropertyAmount = (state) => {
  return getSellingPrice(state) + getClosingCostAmount(state) +
    getUpfrontRepairAmount(state);
};

export const getFinancedAmount = (state) => {
  return getSellingPrice(state) - getDownPaymentAmount(state);
};

export const getFinancedPercentage = (state) => {
  return 100 - getDownPaymentPercentage(state);
};

export const getMortageAmount = (state) => {
  const financingType = getFinancingType(state);
  if(financingType == "principleAndInterest"){
    const p = getFinancedAmount(state); //principle / initial amount borrowed
    const i = (getFinanceRate(state)/100) / 12;  //monthly interest rate
    const n = getFinanceTerm(state) * 12; //number of payments months
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  }else if(financingType == "interestOnly"){
    return (getFinancedAmount(state) * (getFinanceRate(state)/100) )/12;
  }else {
    return 0;
  }
};

export const getMonthlyIncome = (state) => {
  return getMonthlyRent(state) - (getAnnualPropertyTaxes(state)/12) -
    getMonthlyHOA(state) - (getAnnualInsurance(state)/12) - getMonthlyOnGoingRepairAmount(state) -
    ((getVacancyMonths(state)/12)*getMonthlyRent(state)) - getMortageAmount(state);
};

export const getAnnualIncome = (state) => {
  return (getMonthlyRent(state)*(12-getVacancyMonths(state))) - getAnnualPropertyTaxes(state) -
    (getMonthlyHOA(state)*12) - getAnnualInsurance(state)/12 - (getMonthlyOnGoingRepairAmount(state)*12) -
    (getMortageAmount(state)*12);
};

export const getCashOnCashReturn = (state) => getAnnualIncome(state)/getTotalOutOfPocketAmount(state) * 100;

export const getCapRate = (state) => {
  return ( (getMonthlyRent(state)*(12-getVacancyMonths(state))) - getAnnualPropertyTaxes(state) -
           (getMonthlyHOA(state)*12) - getAnnualInsurance(state)/12 -
           (getMonthlyOnGoingRepairAmount(state)*12) ) / getCostOfPropertyAmount(state) * 100;
};