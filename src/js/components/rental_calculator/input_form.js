import React, {Component, PropTypes} from 'react'

class InputForm extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    sellingPrice: PropTypes.number.isRequired,
    updateSellingPrice: PropTypes.func.isRequired,

    upfrontRepairPercentage: PropTypes.number.isRequired,
    updateUpfrontRepairPercentage: PropTypes.func.isRequired,

    upfrontRepairAmount: PropTypes.number.isRequired,
    updateUpfrontRepairAmount: PropTypes.func.isRequired,

    closingCostPercentage: PropTypes.number.isRequired,
    updateClosingCostPercentage: PropTypes.func.isRequired,

    closingCostAmount: PropTypes.number.isRequired,
    updateClosingCostAmount: PropTypes.func.isRequired,

    updateDownPaymentPercentage: PropTypes.func.isRequired,
    downPaymentPercentage: PropTypes.number.isRequired,

    downPaymentAmount: PropTypes.number.isRequired,
    updateDownPaymentAmount: PropTypes.func.isRequired,

    costOfPropertyAmount: PropTypes.number.isRequired,

    financedAmount: PropTypes.number.isRequired,

    financedPercentage: PropTypes.number.isRequired,

    financeTerm: PropTypes.number.isRequired,
    updateFinanceTerm: PropTypes.func.isRequired,

    financeRate: PropTypes.number.isRequired,
    updateFinanceRate: PropTypes.func.isRequired,

    mortgageAmount: PropTypes.number.isRequired,

    annualPropertyTaxes: PropTypes.number.isRequired,
    updateAnnualPropertyTaxes: PropTypes.func.isRequired,

    monthlyHOA: PropTypes.number.isRequired,
    updateMonthlyHOA: PropTypes.func.isRequired,

    annualInsurance: PropTypes.number.isRequired,
    updateAnnualInsurance: PropTypes.func.isRequired,

    monthlyOnGoingRepairPercentage: PropTypes.number.isRequired,
    updateMonthlyOnGoingRepairPercentage: PropTypes.func.isRequired,

    monthlyOnGoingRepairAmount: PropTypes.number.isRequired,
    updateMonthlyOnGoingRepairAmount: PropTypes.func.isRequired,

    vacancyMonths: PropTypes.number.isRequired,
    updateVacancyMonths: PropTypes.func.isRequired,

    cashOnCashReturn: PropTypes.number.isRequired,

    capRate: PropTypes.number.isRequired,

    financingType: PropTypes.string.isRequired,
    updateFinancingType: PropTypes.func.isRequired,

  };

  static defaultProps = {};

  render() {
    const {
      sellingPrice, updateSellingPrice,
      upfrontRepairPercentage, updateUpfrontRepairPercentage,
      upfrontRepairAmount, updateUpfrontRepairAmount,
      closingCostPercentage, updateClosingCostPercentage,
      closingCostAmount, updateClosingCostAmount,
      downPaymentPercentage, updateDownPaymentPercentage,
      downPaymentAmount, updateDownPaymentAmount,
      costOfPropertyAmount,
      totalOutOfPocketAmount,
      financedAmount,
      financedPercentage,
      financeTerm, updateFinanceTerm,
      financeRate, updateFinanceRate,
      mortgageAmount,
      annualPropertyTaxes, updateAnnualPropertyTaxes,
      monthlyHOA, updateMonthlyHOA,
      annualInsurance, updateAnnualInsurance,
      monthlyRent, updateMonthlyRent,
      monthlyOnGoingRepairAmount, updateMonthlyOnGoingRepairAmount,
      monthlyOnGoingRepairPercentage, updateMonthlyOnGoingRepairPercentage,
      vacancyMonths, updateVacancyMonths,
      monthlyIncome,
      annualIncome,
      cashOnCashReturn,
      capRate,
      financingType, updateFinancingType,
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th> Item </th>
                  <th> Percentage </th>
                  <th> Amount </th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td> Selling Price </td>
                  <td> &nbsp; </td>
                  <td>
                    <input type="number" className="form-control" placeholder="500000" autoFocus
                      value={sellingPrice}
                      onChange={evt => updateSellingPrice(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Upfront Repair </td>
                  <td>
                    <input type="number" className="form-control" name="upfrontRepairPercentage"
                           value={upfrontRepairPercentage}
                           onChange={evt => updateUpfrontRepairPercentage(evt.target.value) } />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="upfrontRepairAmount"
                           value={upfrontRepairAmount}
                           onChange={evt => updateUpfrontRepairAmount(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Closing Cost </td>
                  <td>
                    <input type="number" className="form-control" name="closingCostPercentage"
                           value={closingCostPercentage}
                           onChange={evt => updateClosingCostPercentage(evt.target.value) } />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="closingCostAmount"
                           value={closingCostAmount}
                           onChange={evt => updateClosingCostAmount(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Cost of Property </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="costOfPropertyAmount" readOnly disabled
                           value={costOfPropertyAmount} />
                  </td>
                </tr>

                <tr>
                  <td> Down Payment </td>
                  <td>
                    <input type="number" className="form-control" name="closingCostPercentage"
                           value={downPaymentPercentage}
                           onChange={evt => updateDownPaymentPercentage(evt.target.value) } />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="downPaymentAmount"
                           value={downPaymentAmount}
                           onChange={evt => updateDownPaymentAmount(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Financed Amount </td>
                  <td>
                    <input type="number" className="form-control" name="financedPercentage" readOnly
                           value={financedPercentage} />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="financedAmount" readOnly
                           value={financedAmount} />
                  </td>
                </tr>

                <tr>
                  <td> Finance Term</td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="financeTerm"
                           value={financeTerm}
                           onChange={evt => updateFinanceTerm(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Finance Rate</td>
                  <td>
                    <input type="number" className="form-control" name="financeRate"
                           value={financeRate}
                           onChange={evt => updateFinanceRate(evt.target.value) } />
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td> Financing Type</td>
                  <td></td>
                  <td>
                    <select className="form-control" onChange={evt => updateFinancingType(evt.target.value)}
                            value={financingType}>
                      <option value="principleAndInterest">
                        Principle & Interest
                      </option>
                      <option value="interestOnly">
                        Interest Only
                      </option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td> Total Out Of Pocket @ Closing</td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="totalOutOfPocketAmount" readOnly
                           value={totalOutOfPocketAmount} />
                  </td>
                </tr>

                <tr>
                  <td> Monthly Mortgage Payment </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="monthlyMortgagePayment" readOnly
                           value={mortgageAmount} />
                  </td>
                </tr>

                <tr>
                  <td> Annual Property Taxes</td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="annualPropertyTaxes"
                           value={annualPropertyTaxes}
                           onChange={evt => updateAnnualPropertyTaxes(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Monthly HOA </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="monthlyHOA"
                           value={monthlyHOA}
                           onChange={evt => updateMonthlyHOA(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Annual Insurance </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="annualInsurance"
                           value={annualInsurance}
                           onChange={evt => updateAnnualInsurance(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Monthly Rent </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="monthlyRent"
                           value={monthlyRent}
                           onChange={evt => updateMonthlyRent(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Monthly On-going Repair </td>
                  <td>
                    <input type="number" className="form-control" name="monthlyOnGoingRepairPercentage"
                           value={monthlyOnGoingRepairPercentage}
                           onChange={evt => updateMonthlyOnGoingRepairPercentage(evt.target.value) } />
                  </td>
                  <td>
                    <input type="number" className="form-control" name="monthlyOnGoingRepairAmount"
                           value={monthlyOnGoingRepairAmount}
                           onChange={evt => updateMonthlyOnGoingRepairAmount(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Vacancy Months </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="vacancyMonths"
                           value={vacancyMonths}
                           onChange={evt => updateVacancyMonths(evt.target.value) } />
                  </td>
                </tr>

                <tr>
                  <td> Monthly Income </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="monthlyIncome"
                           value={monthlyIncome} readOnly />
                  </td>
                </tr>

                <tr>
                  <td> Annual Income </td>
                  <td></td>
                  <td>
                    <input type="number" className="form-control" name="annualIncome"
                           value={annualIncome} readOnly />
                  </td>
                </tr>

                <tr>
                  <td> Cash on Cash Return</td>
                  <td>
                    <input type="number" className="form-control" name="cashOnCashReturn"
                           value={cashOnCashReturn} readOnly />
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td> Cap Rate</td>
                  <td>
                    <input type="number" className="form-control" name="capRate"
                           value={capRate} readOnly />
                  </td>
                  <td></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
};

export default InputForm