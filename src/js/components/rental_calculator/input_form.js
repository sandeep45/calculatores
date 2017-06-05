import React, {Component, PropTypes} from 'react'
import numeral from 'numeral'

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
            <table className="table table-bordered">
              <tbody className="">

                <tr className="active">
                  <th> Selling Price </th>
                  <th></th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" autoFocus
                             placeholder="the price at which you are buying the property"
                             value={numeral(sellingPrice).format('0,0')}
                             onChange={evt => updateSellingPrice(evt.target.value) } />
                    </div>
                  </th>
                </tr>

                <tr>
                  <td> Upfront Repair </td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="upfrontRepairPercentage"
                             value={upfrontRepairPercentage}
                             onChange={evt => updateUpfrontRepairPercentage(evt.target.value) } />
                      <div className="input-group-addon">%</div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="upfrontRepairAmount"
                             value={numeral(upfrontRepairAmount).format('0,0')}
                             onChange={evt => updateUpfrontRepairAmount(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Closing Cost </td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="closingCostPercentage"
                             value={closingCostPercentage}
                             onChange={evt => updateClosingCostPercentage(evt.target.value) } />
                      <div className="input-group-addon">%</div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="closingCostAmount"
                             value={numeral(closingCostAmount).format('0,0')}
                             onChange={evt => updateClosingCostAmount(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Cost of Property </td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="costOfPropertyAmount"
                             readOnly
                             value={numeral(costOfPropertyAmount).format('0,0')} />
                    </div>
                  </td>
                </tr>

                <tr className="active">
                  <th> Down Payment </th>
                  <th>
                    <div className="input-group">
                      <input type="number" className="form-control" name="closingCostPercentage"
                             value={downPaymentPercentage}
                             onChange={evt => updateDownPaymentPercentage(evt.target.value) } />
                      <div className="input-group-addon">%</div>
                    </div>
                  </th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="downPaymentAmount"
                             value={numeral(downPaymentAmount).format('0,0')}
                             onChange={evt => updateDownPaymentAmount(evt.target.value) } />
                    </div>
                  </th>
                </tr>

                <tr>
                  <td> Financed Amount </td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="financedPercentage"
                             readOnly
                             value={financedPercentage} />
                      <div className="input-group-addon">%</div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="financedAmount"
                             readOnly
                             value={numeral(financedAmount).format('0,0')} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Finance Term</td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <input type="text" className="form-control" name="financeTerm"
                             value={financeTerm}
                             onChange={evt => updateFinanceTerm(evt.target.value) } />
                      <div className="input-group-addon">years</div>
                    </div>

                  </td>
                </tr>

                <tr>
                  <td> Finance Rate</td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="financeRate"
                             value={financeRate}
                             onChange={evt => updateFinanceRate(evt.target.value) } />
                      <div className="input-group-addon">%</div>
                    </div>
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

                <tr className="active">
                  <th> Total Out Of Pocket @ Closing</th>
                  <th></th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="totalOutOfPocketAmount"
                             readOnly
                             value={numeral(totalOutOfPocketAmount).format('0,0')} />
                    </div>
                  </th>
                </tr>

                <tr className="active">
                  <th> Monthly Mortgage Payment </th>
                  <th></th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="monthlyMortgagePayment"
                             readOnly
                             value={numeral(mortgageAmount).format('0,0')} />
                    </div>
                  </th>
                </tr>

                <tr>
                  <td> Annual Property Taxes</td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="annualPropertyTaxes"
                             value={numeral(annualPropertyTaxes).format('0,0')}
                             onChange={evt => updateAnnualPropertyTaxes(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Monthly HOA </td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="monthlyHOA"
                             value={numeral(monthlyHOA).format('0,0')}
                             onChange={evt => updateMonthlyHOA(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Annual Insurance </td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="annualInsurance"
                             value={numeral(annualInsurance).format('0,0')}
                             onChange={evt => updateAnnualInsurance(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr className="active">
                  <th> Monthly Rent </th>
                  <th></th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="monthlyRent"
                             value={numeral(monthlyRent).format('0,0')}
                             onChange={evt => updateMonthlyRent(evt.target.value) } />
                    </div>
                  </th>
                </tr>

                <tr>
                  <td> Monthly On-going Repair </td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="monthlyOnGoingRepairPercentage"
                             value={monthlyOnGoingRepairPercentage}
                             onChange={evt => updateMonthlyOnGoingRepairPercentage(evt.target.value) } />
                      <div className="input-group-addon">%</div>
                    </div>
                  </td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="monthlyOnGoingRepairAmount"
                             value={numeral(monthlyOnGoingRepairAmount).format('0,0')}
                             onChange={evt => updateMonthlyOnGoingRepairAmount(evt.target.value) } />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Annual Vacancy</td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <input type="number" className="form-control" name="vacancyMonths"
                             value={vacancyMonths}
                             onChange={evt => updateVacancyMonths(evt.target.value) } />
                      <div className="input-group-addon">months</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td> Monthly Income </td>
                  <td></td>
                  <td>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="monthlyIncome"
                             value={numeral(monthlyIncome).format('0,0')}
                             readOnly />
                    </div>
                  </td>
                </tr>

                <tr className="active">
                  <th> Annual Income </th>
                  <th></th>
                  <th>
                    <div className="input-group">
                      <div className="input-group-addon">$</div>
                      <input type="text" className="form-control" name="annualIncome"
                             value={numeral(annualIncome).format('0,0')}
                             readOnly />
                    </div>
                  </th>
                </tr>

                <tr className="active">
                  <th> Cash on Cash Return</th>
                  <th>
                    <div className="input-group">
                      <input type="number" className="form-control" name="cashOnCashReturn"
                             value={numeral(cashOnCashReturn).format('0.00')}
                             readOnly />
                      <div className="input-group-addon">%</div>
                    </div>
                  </th>
                  <th style={{verticalAlign: "middle"}} className="text-center lead text-info">
                    {cashOnCashReturn < 8 ? "Less than 8% makes me :-(" : "I :-) at 8% and higher"}
                  </th>
                </tr>

                <tr className="active">
                  <th> Cap Rate</th>
                  <th>
                    <div className="input-group">
                      <input type="number" className="form-control" name="capRate"
                             value={numeral(capRate).format('0.00')}
                             readOnly />
                      <div className="input-group-addon">%</div>
                    </div>
                  </th>
                  <th style={{verticalAlign: "middle"}} className="text-center lead text-info">
                    {capRate < 6 ? "Less than 6% makes me :-(" : "I :-) at 6% and higher"}
                  </th>
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