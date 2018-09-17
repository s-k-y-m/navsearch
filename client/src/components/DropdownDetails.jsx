import React from 'react';

const DropDownDetails = props => {
  const { location } = props;
  return (
    <div className="dropDownItem">
      <h1 className="dropDownCity">{location.city}</h1>
      <h5 className="dropDownState">{location.state}</h5>
    </div>
  );
};

export default DropDownDetails;
