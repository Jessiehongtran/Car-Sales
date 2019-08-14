import React from 'react';

const AddedFeature = props => {
  console.log('added_features', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
