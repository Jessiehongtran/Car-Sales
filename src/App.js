import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {addFeature} from './actions'

const App = (props) => {
  console.log('props in App', props)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  const addAction = () => {
    console.log('add')
    // props.addFeature()
  }

  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.displayedCar} />
        <AddedFeatures car={props.displayedCar} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.storedCars} addAction={addAction} />
        <Total car={props.displayedCar} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)
  return {
    additionalPrice: state.additionalPrice,
    displayedCar: state.car,
    storedCars: state.store,
  }
}

export default connect(
  mapStateToProps,
  {addFeature}
)(App);
