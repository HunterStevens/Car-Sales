import React from 'react';
import {connect} from 'react-redux';
import {addFeatures, removeFeatures} from './actions/CarActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeatures(item)
    console.log(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeatures={props.removeFeatures} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeatures={() => buyItem(props.id)} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    car:state.car,
    additionalFeatures:state.additionalFeatures,
    additionalPrice:state.additionalPrice,
    id:state.additionalFeatures
  };
};

export default connect(
mapStateToProps,
{addFeatures, removeFeatures}
)(App);

