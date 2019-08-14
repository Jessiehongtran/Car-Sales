import React from 'react';

const AddedFeature = props => {
  console.log('added_features', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {() => {props.removeFeature(props.feature.id); props.reducePrice(props.feature.price)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;


