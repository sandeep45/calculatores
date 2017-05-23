import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import * as actions from 'js/actions/';
import * as reducers from 'js/reducers/'
import InputForm from 'js/components/rental_calculator/input_form'

const mapStateToProps = (state, ownProps) => {
  return {
    sellingPrice: reducers.getSellingPrice(state),
    upfrontRepairPercentage: reducers.getUpfrontRepairPercentage(state),
    closingCostPercentage: reducers.getClosingCostPercentage(state),
    downPaymentPercentage: reducers.getDownPaymentPercentage(state),
    upfrontRepairAmount: reducers.getUpfrontRepairAmount(state),
    closingCostAmount: reducers.getClosingCostAmount(state),
    downPaymentAmount: reducers.getDownPaymentAmount(state),
    costOfPropertyAmount: reducers.getCostOfPropertyAmount(state),
    totalOutOfPocketAmount: reducers.getTotalOutOfPocketAmount(state),
    financedAmount: reducers.getFinancedAmount(state),
    financedPercentage: reducers.getFinancedPercentage(state),
    financeTerm: reducers.getFinanceTerm(state),
    mortgageAmount: reducers.getMortageAmount(state),
    financeRate: reducers.getFinanceRate(state),
    annualPropertyTaxes: reducers.getAnnualPropertyTaxes(state),
    monthlyHOA: reducers.getMonthlyHOA(state),
    annualInsurance: reducers.getAnnualInsurance(state),
    monthlyRent: reducers.getMonthlyRent(state),
    monthlyOnGoingRepairPercentage: reducers.getMonthlyOnGoingRepairPercentage (state),
    monthlyOnGoingRepairAmount: reducers.getMonthlyOnGoingRepairAmount(state),
    vacancyMonths: reducers.getVacancyMonths(state),
    monthlyIncome: reducers.getMonthlyIncome(state),
    annualIncome: reducers.getAnnualIncome(state),
    cashOnCashReturn: reducers.getCashOnCashReturn(state),
    capRate: reducers.getCapRate(state),
    financingType: reducers.getFinancingType(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRentalCalculatorItem: (itemName, itemValue) => {
      dispatch(actions.updateRentalCalculatorItem(itemName, itemValue));
    },
    updateSellingPrice: (amt) => {
      dispatch(actions.updateSellingPrice(amt));
    },
    updateUpfrontRepairPercentage: (perc) => {
      dispatch(actions.updateUpfrontRepairPercentage(perc));
    },
    updateUpfrontRepairAmount: (amt) => {
      dispatch(actions.updateUpfrontRepairAmount(amt));
    },
    updateClosingCostPercentage: (perc) => {
      dispatch(actions.updateClosingCostPercentage(perc));
    },
    updateClosingCostAmount: (amt) => {
      dispatch(actions.updateClosingCostAmount(amt));
    },
    updateDownPaymentPercentage: (perc) => {
      dispatch(actions.updateDownPaymentPercentage(perc));
    },
    updateDownPaymentAmount: (amt) => {
      dispatch(actions.updateDownPaymentAmount(amt));
    },
    updateFinanceTerm: (years) => {
      dispatch(actions.updateFinanceTerm(years));
    },
    updateFinanceRate: (rate) => {
      dispatch(actions.updateFinanceRate(rate));
    },
    updateAnnualPropertyTaxes: (amt) => dispatch(actions.updateAnnualPropertyTaxes(amt)),
    updateMonthlyHOA: (amt) => dispatch(actions.updateMonthlyHOA(amt)),
    updateAnnualInsurance: (amt) => dispatch(actions.updateAnnualInsurance(amt)),
    updateMonthlyRent: (amt) => dispatch(actions.updateMonthlyRent(amt)),
    updateMonthlyOnGoingRepairPercentage: (perc) => dispatch(actions.updateMonthlyOnGoingRepairPercentage(perc)),
    updateMonthlyOnGoingRepairAmount: (amt) => dispatch(actions.updateMonthlyOnGoingRepairAmount(amt)),
    updateVacancyMonths: (months) => dispatch(actions.updateVacancyMonths(months)),
    updateFinancingType: (type) => dispatch(actions.updateFinancingType(type)),
  };
};

class RentalCalculator extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <br />
        <InputForm {...this.props} />
      </div>
    );
  }
}

RentalCalculator = connect(mapStateToProps, mapDispatchToProps)(RentalCalculator);

export default RentalCalculator