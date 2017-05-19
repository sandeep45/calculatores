import React, {Component, PropTypes} from 'react'

class InputForm extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    rentalCalculatorHash: PropTypes.object.isRequired,
    updateRentalCalculatorItem: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    const {rentalCalculatorHash, updateRentalCalculatorItem} = this.props;

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
                    <input type="number" className="form-control"
                      placeholder="500000" autoFocus
                      value={rentalCalculatorHash.sellingPrice}
                      onChange={this._itemChanged.bind(this, "sellingPrice")}/>
                  </td>
                </tr>
                <tr>
                  <td> Upfront Repair </td>
                  <td>
                    <input type="number" className="form-control"
                      placeholder=".03" autoFocus
                      value={rentalCalculatorHash.upfrontRepairPercentage}
                      onChange={this._itemChanged.bind(this, "upfrontRepairPercentage")}/>
                  </td>
                  <td>
                   {rentalCalculatorHash.sellingPrice * rentalCalculatorHash.upfrontRepairPercentage}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  _itemChanged = (itemName, evt) => {
    console.log(itemName, evt.target.value);

    const {updateRentalCalculatorItem} = this.props;
    const itemValue = evt.target.value;
    updateRentalCalculatorItem(itemName, itemValue);
  }
};

export default InputForm