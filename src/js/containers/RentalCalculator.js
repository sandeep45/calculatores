import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'
import * as actions from 'js/actions/';
import * as reducers from 'js/reducers/'
import InputForm from 'js/components/rental_calculator/input_form'

const mapStateToProps = (state, ownProps) => {
  const rentalCalculatorHash = reducers.getEntireRentalCalculatorHash(state);
  return {
    rentalCalculatorHash
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRentalCalculatorItem: (itemName, itemValue) => {
      dispatch(actions.updateRentalCalculatorItem(itemName, itemValue));
    },
  };
};

class RentalCalculator extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>Rental Calculator</h1>
        <InputForm {...this.props} />
      </div>
    );
  }
}

RentalCalculator = connect(mapStateToProps, mapDispatchToProps)(RentalCalculator);

export default RentalCalculator