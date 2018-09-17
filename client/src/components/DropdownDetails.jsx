import React from 'react';

const DropDownDetails = props => {
  const { location, nearest } = props;
  return (
    <div className="dropDownItem">
      <h1 className="dropDownCity">{location.city}</h1>
      <h5 className="dropDownState">{location.state}</h5>
      {nearest === location.city ? <div class="nearest">Nearest</div> : null}
    </div>
  );
};

export default DropDownDetails;
