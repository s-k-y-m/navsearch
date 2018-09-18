import React from 'react';
import styles from '../styles/dropdown.css';

const DropDownDetails = props => {
  const { location, nearest } = props;
  return (
    <div className={styles.dropDownItem}>
      <h1 className={styles.dropDownCity}>{location.city}</h1>
      <h5 className={styles.dropDownState}>{location.state}</h5>
      {nearest === location.city ? (
        <div class={styles.nearest}>Nearest</div>
      ) : null}
    </div>
  );
};

export default DropDownDetails;
