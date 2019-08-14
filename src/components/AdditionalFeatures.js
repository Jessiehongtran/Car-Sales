import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log('props in AdditionalFeatures', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            // console.log('item in AdditionalFeatures', item)
            // console.log('function', props.addFeature)
            <AdditionalFeature key={item.id} feature={item} addFeature = {props.addFeature} increasePrice = {props.increasePrice}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
